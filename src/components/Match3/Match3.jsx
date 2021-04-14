import React from 'react';
import Sketch from "react-p5";

const Match3 = ({ difficult }) => {

    function Colors(p5) {
        this.colors = [
            p5.color(255),
            p5.color(255, 210, 13),
            p5.color(232, 64, 12),
            p5.color(182, 0, 255),
            p5.color(12, 132, 232),
            p5.color(0, 255, 42)
        ];

        this.getColor = function (index) {
            if (index > -1 && index < this.colors.length) {
                return this.colors[index];
            } else {
                return null;
            }
        }
    }

    var scoreText = function (p5, x, y, fontSize, prefixText) {
        this.score = 0;
        this.fontSize = fontSize;
        this.position = p5.createVector(x, y);
        this.prefixText = prefixText;
        this.color = p5.color(255);

        this.show = function () {
            /*textAlign(LEFT);
            textSize(this.fontSize);
            fill(this.color);
            text(this.prefixText + this.score, this.position.x, this.position.y);*/
        }
    }

    var matchManager = function (p5) {
        this.activeTile = null;

        function findNextColoredTile(collection, index) {
            for (var i = index; i > -1; i--) {
                if (collection[i].id != 0) {
                    return collection[i];
                }
            }

            return null;
        }

        this.onMouseDown = function (selectedTiles) {
            if (selectedTiles.length > 0) {
                // console.log(selectedTiles[0].position + " ==> " + mouseX + ", " + mouseY);
                this.activeTile = selectedTiles[0];
            }
        }

        this.onMouseDragged = function (selectedTiles) {
            if (selectedTiles.length > 0) {
                // console.log(selectedTiles[0].position + " ==> " + mouseX + ", " + mouseY);
                if (selectedTiles[0] === this.activeTile) {
                    return;
                }
                if (this.activeTile === null) {
                    this.activeTile = selectedTiles[0];
                } else {
                    var currTile = this.activeTile;
                    var newTile = selectedTiles[0];
                    var currTileColor = currTile.id;
                    var newTileColor = newTile.id;

                    if (!currTile.containsTile(newTile)) {
                        return;
                    }

                    currTile.setId(newTileColor);
                    newTile.setId(currTileColor);
                    animation.swap(currTile, newTile);

                    this.activeTile = selectedTiles[0];
                }
            }
        }

        this.onMouseUp = function () {
            var matchingTiles = [];
            var haveMadeChange = false;
            var multiplier = 0;

            for (var i = 0; i < tiles.tiles.length; i++) {
                if (tiles.tiles[i].horizontalMatch() && tiles.tiles[i].id != 0) {
                    matchingTiles[matchingTiles.length] = tiles.tiles[i].horizontalTiles();
                }
                if (tiles.tiles[i].verticalMatch() && tiles.tiles[i].id != 0) {
                    matchingTiles[matchingTiles.length] = tiles.tiles[i].verticalTiles();
                }
            }

            multiplier = matchingTiles.length;

            do {
                haveMadeChange = false;
                var toMerge = [];
                var toReplace = [];

                for (var x = 0; x < matchingTiles.length; x++) {
                    for (var y = 0; y < matchingTiles[x].length; y++) {
                        for (var i = 0; i < matchingTiles.length; i++) {
                            if (matchingTiles[i].indexOf(matchingTiles[x][y]) != -1
                                && toMerge.indexOf(matchingTiles[x][y]) === -1) {
                                toMerge[toMerge.length] = matchingTiles[i];
                            }
                        }
                    }

                    toMerge = toMerge.filter((value, index) => toMerge.indexOf(value) == index);
                    if (toMerge.length > 1) {
                        haveMadeChange = true;
                        for (var i = 0; i < toMerge.length; i++) {
                            var removeIndex = matchingTiles.indexOf(toMerge[i]);
                            matchingTiles.splice(removeIndex, 1);
                            toReplace = toReplace.concat(toMerge[i]);
                        }

                        toReplace = toReplace.filter((value, index) => toReplace.indexOf(value) == index);
                        matchingTiles[matchingTiles.length] = toReplace;

                        break;
                    } else {
                        toMerge = [];
                    }
                }
            } while (haveMadeChange);

            for (var x = 0; x < matchingTiles.length; x++) {
                for (var y = 0; y < matchingTiles[x].length; y++) {
                    score.score += multiplier;
                    // animate score poping up from tile position
                    animation.textFrom(matchingTiles[x][y].position, multiplier, matchingTiles[x][y].color)
                    // set tile id to 0
                    matchingTiles[x][y].setId(0);
                }
            }

            // move empty tiles up to later simulate having tiles fall into place
            var tilesToFill = [];
            for (var x = tiles.grid.length - 1; x > -1; x--) {
                for (var y = tiles.grid[x].length - 1; y > -1; y--) {
                    if (tiles.grid[x][y].id === 0) {
                        var newPos = findNextColoredTile(tiles.grid[x], y);

                        if (newPos === null) {
                            tiles.grid[x][y].position.y -= 60;
                            tilesToFill[tilesToFill.length] = tiles.grid[x][y];
                        } else {
                            tiles.grid[x][y].position.y = newPos.position.y;
                            tiles.grid[x][y].setId(newPos.id);
                            newPos.setId(0);
                        }
                        animation.addFallingTile(tiles.grid[x][y]);
                    }
                }
            }

            for (var i = 0; i < tilesToFill.length; i++) {
                let nColor = 0;
                switch (difficult) {
                    case "principiante":
                    nColor = 5;
                        break;
                    case "basico":
                        nColor = 6;
                        break;

                }
                tilesToFill[i].setId(p5.floor(p5.random(1, nColor)));
            }
        }
    }

    var animationManager = function (p5) {
        this.animations = [];
        this.textAnimations = [];
        this.fallingTiles = [];
        this.isAnimating = false;

        this.swap = function (firstItem, secondItem) {
            this.animations[this.animations.length] = {
                "progress": 0.0,
                "items": [{
                    "item": firstItem,
                    "startPos": secondItem.startPosition,
                    "endPos": firstItem.startPosition
                },
                {
                    "item": secondItem,
                    "startPos": firstItem.startPosition,
                    "endPos": secondItem.startPosition
                }]
            }
        }

        this.textFrom = function (startPosition, text, color) {
            this.textAnimations[this.textAnimations.length] = {
                "progress": 0,
                "startPosition": startPosition,
                "text": text,
                "color": color
            }
        }

        this.addFallingTile = function (tile) {
            this.fallingTiles[this.fallingTiles.length] = {
                "progress": 0,
                "tile": tile,
                "startPosition": tile.position
            }
        }

        this.show = function () {
            if (this.animations.length === 0) {
                return;
            }

            this.isAnimating = true;
            this.animations[0]["items"][0]["item"].position.x = p5.lerp(this.animations[0]["items"][0]["startPos"].x,
                this.animations[0]["items"][0]["endPos"].x,
                this.animations[0]["progress"]);
            this.animations[0]["items"][0]["item"].position.y = p5.lerp(this.animations[0]["items"][0]["startPos"].y,
                this.animations[0]["items"][0]["endPos"].y,
                this.animations[0]["progress"]);

            this.animations[0]["items"][1]["item"].position.x = p5.lerp(this.animations[0]["items"][1]["startPos"].x,
                this.animations[0]["items"][1]["endPos"].x,
                this.animations[0]["progress"]);
            this.animations[0]["items"][1]["item"].position.y = p5.lerp(this.animations[0]["items"][1]["startPos"].y,
                this.animations[0]["items"][1]["endPos"].y,
                this.animations[0]["progress"]);
            if (this.animations[0]["progress"] >= 1.0) {
                this.animations.splice(0, 1);
                this.isAnimating = false;
                return;
            }
            this.animations[0]["progress"] += 0.15;
            if (this.animations[0]["progress"] > 1.0) {
                this.animations[0]["progress"] = 1.0;
            }
        }

        this.animateText = function () {
            for (var i = this.textAnimations.length - 1; i > -1; i--) {
                var currPos = p5.createVector(
                    this.textAnimations[i]["startPosition"].x,
                    p5.lerp(this.textAnimations[i]["startPosition"].y,
                        this.textAnimations[i]["startPosition"].y - 10,
                        this.textAnimations[i]["progress"])
                );

                p5.textAlign(p5.CENTER);
                p5.textSize(32);
                p5.fill(this.textAnimations[i]["color"]);
                p5.text(this.textAnimations[i]["text"], currPos.x, currPos.y);

                this.textAnimations[i]["progress"] += 0.075;
                if (this.textAnimations[i]["progress"] > 1.0) {
                    this.textAnimations[i]["progress"] = 1.0;
                }
                if (this.textAnimations[i]["progress"] === 1.0) {
                    this.textAnimations.splice(i, 1);
                }
            }
        }

        this.fall = function () {
            for (var i = this.fallingTiles.length - 1; i > -1; i--) {
                var currPos = p5.createVector(
                    p5.lerp(this.fallingTiles[i]["startPosition"].x,
                        this.fallingTiles[i]["tile"].startPosition.x,
                        this.fallingTiles[i]["progress"]),
                    p5.lerp(this.fallingTiles[i]["startPosition"].y,
                        this.fallingTiles[i]["tile"].startPosition.y,
                        this.fallingTiles[i]["progress"])
                )

                this.fallingTiles[i]["tile"].position = currPos;

                this.fallingTiles[i]["progress"] += 0.1;
                if (this.fallingTiles[i]["progress"] > 1.0) {
                    this.fallingTiles[i]["progress"] = 1.0;
                }
                if (this.fallingTiles[i]["progress"] === 1.0) {
                    this.fallingTiles.splice(i, 1);
                }
            }
        }
    }

    var Grid = function (p5) {
        this.x = 0;
        this.y = 0;
        this.tiles = [];
        this.grid = [];

        this.makeGrid = function (p5, centerX, centerY, x, y, xScale, yScale, xPadding, yPadding) {
            this.x = x;
            this.y = y;
            this.nColor = 0;
            switch (difficult) {
                case "principiante":
                    this.nColor = 5;
                    break;
                case "basico":
                    this.nColor = 6;
                    break;

            }

            var halfWidth = (x * xScale) + (x * xPadding);
            var halfHeight = (y * yScale) + (y * yPadding);

            halfWidth -= xScale / 2;
            halfWidth -= xPadding / 2;

            halfHeight -= yScale / 2;
            halfHeight -= yPadding / 2;

            halfWidth /= 2;
            halfHeight /= 2;

            var startX = centerX - halfWidth;
            var startY = centerY - halfHeight;

            for (var X = 0; X < x; X++) {
                startY = centerY - halfHeight;
                var tempArray = [];
                for (var Y = 0; Y < y; Y++) {
                    tempArray[Y] = new Tile(p5, startX, startY, xScale, yScale);
                    startY += yScale + yPadding;

                    tempArray[Y].index = X + "," + Y;
                }
                this.grid[X] = tempArray;
                startX += xScale + xPadding;
            }

            for (var X = 0; X < x; X++) {
                for (var Y = 0; Y < y; Y++) {
                    // add to tiles
                    this.tiles[this.tiles.length] = this.grid[X][Y];
                    // set tile ID
                    this.grid[X][Y].setId(p5.floor(p5.random(1, this.nColor)));

                    // set up
                    if (Y - 1 > -1) {
                        this.grid[X][Y].up = this.grid[X][Y - 1];
                    }
                    // set down
                    if (Y + 1 < y) {
                        this.grid[X][Y].down = this.grid[X][Y + 1];
                    }
                    // set left
                    if (X - 1 > -1) {
                        this.grid[X][Y].left = this.grid[X - 1][Y];
                    }
                    // set right
                    if (X + 1 < x) {
                        this.grid[X][Y].right = this.grid[X + 1][Y];
                    }
                }
            }
        }

        this.show = function () {
            for (var i = 0; i < this.tiles.length; i++) {
                this.tiles[i].show();
            }
        }
    }

    function Tile(p5, x, y, width, height) {

        this.position = p5.createVector(x, y);
        this.startPosition = p5.createVector(x, y);
        this.width = width;
        this.height = height;
        this.color = p5.color(255);
        this.id = null;

        this.up = null;
        this.down = null;
        this.left = null;
        this.right = null;

        this.index = "0,0";

        this.containsTile = function (item) {
            return this.up === item ||
                this.down === item ||
                this.left === item ||
                this.right === item;
        }

        this.horizontalMatch = function () {
            return (this.left != null && this.left.id === this.id) &&
                (this.right != null && this.right.id === this.id);
        }

        this.verticalMatch = function () {
            return (this.up != null && this.up.id === this.id) &&
                (this.down != null && this.down.id === this.id);
        }

        this.horizontalTiles = function () {
            var toReturn = [this];

            if (this.left != null && this.left.id === this.id) toReturn[toReturn.length] = this.left;
            if (this.right != null && this.right.id === this.id) toReturn[toReturn.length] = this.right;

            return toReturn;
        }

        this.verticalTiles = function () {
            var toReturn = [this];

            if (this.up != null && this.up.id === this.id) toReturn[toReturn.length] = this.up;
            if (this.down != null && this.down.id === this.id) toReturn[toReturn.length] = this.down;

            return toReturn;
        }

        this.setId = function (id) {
            this.id = id;
            this.color = colors.getColor(id);
        }

        this.show = function () {
            p5.fill(this.color);
            p5.rectMode(p5.CENTER);
            p5.rect(this.position.x, this.position.y, this.width, this.height);

            /*p5.textAlign(p5.CENTER);
            p5.textSize(16);
            p5.fill(0);
            p5.text(this.id, this.position.x, this.position.y);*/
        }

        this.isMouseOver = function (mousePosX, mousePosY, xPadding, yPadding) {
            var isInsideX = (mousePosX >= this.startPosition.x - this.width / 2 - xPadding &&
                mousePosX <= this.position.x + this.width / 2 + xPadding);
            var isInsideY = (mousePosY >= this.startPosition.y - this.height / 2 - yPadding &&
                mousePosY <= this.position.y + this.height / 2 + yPadding);

            return (isInsideX && isInsideY);
        }
    }

    var tiles;
    var colors;
    var score;
    var topScore;
    var matchManager;
    var animation;
    var difN;

    const setup = (p5, canvasParentRef) => {

        switch (difficult) {
            case "principiante":
                difN = 10;
                break;

            case "basico":
                difN = 8;
                break;
        };

        topScore = new scoreText(p5, 50, 60, 45, "Top Score: ")
        score = new scoreText(p5, 50, 100, 30, "Score: ");
        p5.createCanvas(p5.windowWidth * 0.25, p5.windowWidth * 0.25).parent(canvasParentRef);
        colors = new Colors(p5);
        matchManager = new matchManager(p5);
        animation = new animationManager(p5);
        tiles = new Grid(p5);
        tiles.makeGrid(p5, p5.width / 2, p5.height / 2, difN, difN, p5.windowWidth / (difN * (difN - 2)), p5.windowWidth / (difN * (difN - 2)), p5.windowWidth * 0.005, p5.windowWidth * 0.005);
    }

    const draw = (p5) => {
        p5.background(255);
        topScore.show();
        score.show();
        tiles.show();
        animation.show();
        animation.animateText();
        animation.fall();
    }

    const mousePressed = (p5) => {
        if (animation.isAnimating) {
            return;
        }
        matchManager.onMouseDown(tiles.tiles.filter(function (x) { return x.isMouseOver(p5.mouseX, p5.mouseY, 0, 0); }));
    }

    const mouseDragged = (p5) => {
        if (animation.isAnimating) {
            return;
        }
        matchManager.onMouseDragged(tiles.tiles.filter(function (x) { return x.isMouseOver(p5.mouseX, p5.mouseY, 0, 0); }));
    }

    const mouseReleased = (p5) => {
        matchManager.onMouseUp();
    }

    /*
    //-------------------------------------------------------
    // selects an element based on its weighted probability.
    //-------------------------------------------------------
    var select = function (array) {
        var random = Math.random();
        for (var i = 0; i < array.length; i++) {
            var _a = array[i], value = _a[0], weight = _a[1];
            if (random < weight) {
                return value;
            }
            else {
                random -= weight;
            }
        }
        return null;
    };
    //-------------------------------------------------------
    // the population with hardcoded fitness values.
    //-------------------------------------------------------
    var population = [
        ["_______", 0],
        ["unicron", 100],
        ["popcorn", 404],
        ["_______", 0],
        ["aaaaaah", 788],
        ["isotope", 220],
        ["_______", 0],
        ["_______", 0],
        ["_______", 0]
    ];
    console.log("population fitness", population);
    //--------------------------------------------------------
    // step 1) sum fitness for each element.
    //--------------------------------------------------------
    var total = population.reduce(function (acc, element) { return acc + element[1]; }, 0);
    //---------------------------------------------------------
    // step 2) compute weights (fitness / total) store in tuple.
    //---------------------------------------------------------
    var weighted = population.map(function (element) { return [element[0], element[1] / total]; });
    console.log("population weighted", weighted);
    //---------------------------------------------------------
    // step 3) cross em
    //---------------------------------------------------------
    for (var i = 0; i < 100; i++) {
        var a = select(weighted);
        var b = select(weighted);
        console.log(undefined, a + " x " + b);
    }
    */



    return (
        <>
            <Sketch setup={setup} draw={draw} mousePressed={mousePressed} mouseDragged={mouseDragged} mouseReleased={mouseReleased} />
        </>
    )
}

export default Match3;
