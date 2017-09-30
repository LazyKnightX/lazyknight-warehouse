// =================================================
// DevilGame.js
// =================================================

/*:
 * @plugindesc 拯救大魔王的游戏配置文件。
 * @author 吃了就睡工作室
 * @help 这里包含拯救大魔王游戏会使用的各类配置。
 * 这些数据会被使用到菜单界面、战斗界面等各类与程序逻辑相关的地方。
 *
 * 这里也包含各类协助拯救大魔王开发的程序函数。
 *
 *
 *
 * @param fixedConfig
 * @type note
 * @text 固定设置
 * @default "这里包含了一些固定的配置。"
 * @desc 这是一个注释。
 *
 * @param useFixedParty
 * @parent fixedConfig
 * @type boolean
 * @text 使用固定队伍模式
 * @default false
 * @desc 决定玩家是否可以变更队伍顺序。如果不使用固定队伍模式，则玩家可以自行调整担任队长的角色。
 *
 *
 *
 * @param variableIdMap
 * @type note
 * @text 变量ID
 * @default "本分类下方的所有值均对应一个变量ID。"
 * @desc 这是一个注释。
 *
 * @param usingActors
 * @parent variableIdMap
 * @type variable[]
 * @text 玩家选择的角色
 * @default ["30","31","32","33"]
 * @desc 对应玩家所选择的角色ID的变量ID，只有前4个值有效，因为游戏只允许玩家选择4个角色。
 *
 *
 *
 * @param debugConfig
 * @type note
 * @text DEBUG设置
 * @default "这里包含了与DEBUG相关的配置。"
 * @desc 这是一个注释。
 */

function DevilGame() {
}
DevilGame.parameters = PluginManager.parameters('DevilGame')
DevilGame.useFixedParty = DevilGame.parameters['useFixedParty'] == 'true'
/**
 * string id
 * @type {string}
 */
DevilGame.currentActiveMenuId = 'character' // See: Layout_MenuSwitchPanel
DevilGame.currentActivePlayerCharacterSlotIndex = 0 // 0 ~ 3
DevilGame.getCurrentActivePlayerCharacter = function () {
    return GetPlayerCharacter(DevilGame.currentActivePlayerCharacterSlotIndex)
}

ImageManager.loadEnemyDraw = function (filename) {
    return this.loadBitmap('img/pictures/enemy_draw/', filename, 0, true)
}
ImageManager.loadCharacterDraw = function (filename) {
    return this.loadBitmap('img/pictures/character_draw/', filename, 0, true)
}
ImageManager.loadAchievementDraw = function (filename) {
    return this.loadBitmap('img/pictures/achievement_draw/', filename, 0, true)
}
ImageManager.loadCharacterHead = function (filename) {
    return this.loadBitmap('img/pictures/character_head/', filename, 0, true)
}
ImageManager.loadSkillIcon = function (filename) {
    return this.loadBitmap('img/pictures/skill_icon/', filename, 0, true)
}
ImageManager.loadCharacterCard = function (filename) {
    return this.loadBitmap('img/pictures/character_card/', filename, 0, true)
}

/**
 * for fake actor test equipment.
 */
Game_Actor.prototype.optimizeEquipmentsWithoutTrade = function () {
    var maxSlots = this.equipSlots().length
    this.clearEquipmentsWithoutTrade()
    for (var i = 0; i < maxSlots; i++) {
        this.forceChangeEquip(i, this.bestEquipItem(i))
    }
}
/**
 * for fake actor test equipment.
 */
Game_Actor.prototype.clearEquipmentsWithoutTrade = function () {
    var maxSlots = this.equipSlots().length
    for (var i = 0; i < maxSlots; i++) {
        this.forceChangeEquip(i, null)
    }
}

// Menu: Entry
// - Enemy
function GetEntryEnemy() {
    // TODO
    return [
        {name: "猛毒调配师1", description: "(TODO)连续讨伐烈性蛇群达5次。攻击获得1%剧毒增益。", draw: "1"},
        {name: "猛毒调配师2", description: "连续讨伐烈性蛇群达5次。攻击获得2%剧毒增益。", draw: "2"},
        {name: "猛毒调配师3", description: "连续讨伐烈性蛇群达5次。攻击获得3%剧毒增益。", draw: "3"},
        {name: "猛毒调配师4", description: "连续讨伐烈性蛇群达5次。攻击获得4%剧毒增益。", draw: "2"},
        {name: "猛毒调配师5", description: "连续讨伐烈性蛇群达5次。攻击获得5%剧毒增益。", draw: "3"},
        {name: "猛毒调配师6", description: "连续讨伐烈性蛇群达5次。攻击获得6%剧毒增益。", draw: "2"},
        {name: "猛毒调配师7", description: "连续讨伐烈性蛇群达5次。攻击获得7%剧毒增益。", draw: "1"},
        {name: "猛毒调配师8", description: "连续讨伐烈性蛇群达5次。攻击获得8%剧毒增益。", draw: "2"},
        {name: "猛毒调配师9", description: "连续讨伐烈性蛇群达5次。攻击获得9%剧毒增益。", draw: "3"},
        {name: "猛毒调配师0", description: "连续讨伐烈性蛇群达5次。攻击获得A%剧毒增益。", draw: "2"},
        {name: "猛毒调配师A", description: "连续讨伐烈性蛇群达5次。攻击获得B%剧毒增益。", draw: "3"},
        {name: "猛毒调配师B", description: "连续讨伐烈性蛇群达5次。攻击获得C%剧毒增益。", draw: "2"}
    ]
}
// - Character
function GetEntryCharacter() {
    // TODO
    return [
        {name: "拖稿天王1", description: "(TODO)已然不敢再估算时间了1。", draw: "1"},
        {name: "拖稿天王2", description: "已然不敢再估算时间了2。", draw: "2"},
        {name: "拖稿天王3", description: "已然不敢再估算时间了3。", draw: "3"},
        {name: "拖稿天王4", description: "已然不敢再估算时间了4。", draw: "2"},
        {name: "拖稿天王5", description: "已然不敢再估算时间了5。", draw: "3"},
        {name: "拖稿天王6", description: "已然不敢再估算时间了6。", draw: "2"},
        {name: "拖稿天王7", description: "已然不敢再估算时间了7。", draw: "1"},
        {name: "拖稿天王8", description: "已然不敢再估算时间了8。", draw: "2"},
        {name: "拖稿天王9", description: "已然不敢再估算时间了9。", draw: "3"}
    ]
}
// - Achievement
function GetEntryAchievement() {
    // TODO
    return [
        {name: "拖稿狂魔1", description: "(TODO)感受到背后的阴凉了吗1。", draw: "1"},
        {name: "拖稿狂魔2", description: "感受到背后的阴凉了吗2。", draw: "2"},
        {name: "拖稿狂魔3", description: "感受到背后的阴凉了吗3。", draw: "3"},
        {name: "拖稿狂魔4", description: "感受到背后的阴凉了吗4。", draw: "2"},
        {name: "拖稿狂魔5", description: "感受到背后的阴凉了吗5。", draw: "3"},
        {name: "拖稿狂魔6", description: "感受到背后的阴凉了吗6。", draw: "2"},
        {name: "拖稿狂魔7", description: "感受到背后的阴凉了吗7。", draw: "1"},
        {name: "拖稿狂魔8", description: "感受到背后的阴凉了吗8。", draw: "2"},
        {name: "拖稿狂魔9", description: "感受到背后的阴凉了吗9。", draw: "3"},
        {name: "拖稿狂魔0", description: "感受到背后的阴凉了吗A。", draw: "2"},
        {name: "拖稿狂魔A", description: "感受到背后的阴凉了吗B。", draw: "3"},
        {name: "拖稿狂魔B", description: "感受到背后的阴凉了吗C。", draw: "2"},
        {name: "拖稿狂魔C", description: "感受到背后的阴凉了吗D。", draw: "1"},
        {name: "拖稿狂魔D", description: "感受到背后的阴凉了吗E。", draw: "2"},
        {name: "拖稿狂魔E", description: "感受到背后的阴凉了吗F。", draw: "3"}
    ]
}
function GetSaveDataList() {
    return [
        {id: 1, head: 1, desc: "重生1", past: 10, time: "2017.04.21 12:01"},
        {id: 2, head: 2, desc: "重生2", past: 11, time: "2017.04.21 12:02"},
        {id: 3, head: 1, desc: "重生3", past: 12, time: "2017.04.21 12:03"},
        {id: 4, head: 2, desc: "重生4", past: 13, time: "2017.04.21 12:04"},
        {id: 5, head: 1, desc: "重生5", past: 14, time: "2017.04.21 12:05"},
        {id: 6, head: 2, desc: "重生6", past: 15, time: "2017.04.21 12:06"},
        {id: 7, head: 1, desc: "重生7", past: 16, time: "2017.04.21 12:07"},
        {id: 8, head: 2, desc: "重生8", past: 17, time: "2017.04.21 12:08"},
        {id: 9, head: 1, desc: "重生9", past: 18, time: "2017.04.21 12:09"},
    ]
}

// slotIndex: 0 ~ 3
function IsFixedParty() {
    return useFixedParty
}
function GetPlayerGold() {
    return $gameParty.gold()
}
function GetPlayerSpecificItemCount(item) {
    return $gameParty.numItems(item)
}
function GetPlayerNormalItems() {
    return $gameParty.allItems().filter(item => {
        return DataManager.isItem(item) && item.itypeId === 1
    })
}
function GetPlayerSpecialItems() {
    return $gameParty.allItems().filter(item => {
        return DataManager.isItem(item) && item.itypeId === 2
    })
}
function GetPlayerEquipmentItems() {
    return $gameParty.allItems().filter(item => {
        return DataManager.isWeapon(item) || DataManager.isArmor(item)
    })
}
function GetPlayerCharacterCount() {
    return $gameParty.members().length
}
function GetPlayerCharacter(slotIndex) {
    return $gameParty.members()[slotIndex]
}
function GetPlayerCharacterCopy(slotIndex) {
    return JsonEx.makeDeepCopy($gameParty.members()[slotIndex])
}
function GetPlayerCharacterData(slotIndex) {
    return GetPlayerCharacter(slotIndex).actor()
}
function GetPlayerCharacterName(slotIndex) {
    return GetPlayerCharacterData(slotIndex).name
}
function GetPlayerCharacterNickname(slotIndex) {
    return GetPlayerCharacterData(slotIndex).nickname
}
function GetPlayerCharacterProfile(slotIndex) {
    return GetPlayerCharacterData(slotIndex).profile
}
function GetPlayerCharacterNote(slotIndex) {
    return GetPlayerCharacterData(slotIndex).note
}
function GetPlayerCharacterMeta(slotIndex) {
    return GetPlayerCharacterData(slotIndex).meta
}
function GetPlayerCharacterClassId(slotIndex) {
    return GetPlayerCharacterData(slotIndex).classId
}
function GetPlayerCharacterClassData(slotIndex) {
    return $dataClasses[GetPlayerCharacterClassId(slotIndex)]
}
function GetPlayerCharacterClassName(slotIndex) {
    return GetPlayerCharacterClassData(slotIndex).name
}
function GetPlayerCharacterHead(slotIndex) {
    return GetPlayerCharacterMeta(slotIndex).head
}
function GetPlayerCharacterCard(slotIndex) {
    return GetPlayerCharacterMeta(slotIndex).card
}
function GetPlayerCharacterHp(slotIndex) {
    return GetPlayerCharacter(slotIndex).hp
}
function GetPlayerCharacterMp(slotIndex) {
    return GetPlayerCharacter(slotIndex).mp
}
function GetPlayerCharacterMaxHp(slotIndex) {
    return GetPlayerCharacter(slotIndex).mhp
}
function GetPlayerCharacterMaxMp(slotIndex) {
    return GetPlayerCharacter(slotIndex).mmp
}
function GetPlayerCharacterLevel(slotIndex) {
    return GetPlayerCharacter(slotIndex).level
}
function GetPlayerCharacterCurrentTotalExp(slotIndex) {
    var classId = GetPlayerCharacterClassId(slotIndex)
    return GetPlayerCharacter(slotIndex)._exp[classId]; // I don't know why rmmv add classId info here ...
}
function GetPlayerCharacterCurrentLevelTotalExp(slotIndex) {
    var currentLevel = GetPlayerCharacterLevel(slotIndex)
    return GetPlayerCharacter(slotIndex).expForLevel(currentLevel)
}
function GetPlayerCharacterNextLevelTotalExp(slotIndex) {
    var nextLevel = GetPlayerCharacterLevel(slotIndex) + 1
    nextLevel = Math.min(99, nextLevel)
    return GetPlayerCharacter(slotIndex).expForLevel(nextLevel)
}
function GetPlayerCharacterCurrentExp(slotIndex) {
    var currentLevelTotalExp = GetPlayerCharacterCurrentLevelTotalExp(slotIndex)
    var currentTotalExp = GetPlayerCharacterCurrentTotalExp(slotIndex)
    return currentTotalExp - currentLevelTotalExp
}
function GetPlayerCharacterNextExp(slotIndex) {
    var currentLevelTotalExp = GetPlayerCharacterCurrentLevelTotalExp(slotIndex)
    var nextLevelTotalExp = GetPlayerCharacterNextLevelTotalExp(slotIndex)
    return nextLevelTotalExp - currentLevelTotalExp
}
function GetPlayerCharacterHpProgress(slotIndex) {
    return GetPlayerCharacterHp(slotIndex) / GetPlayerCharacterMaxHp(slotIndex)
}
function GetPlayerCharacterMpProgress(slotIndex) {
    return GetPlayerCharacterMp(slotIndex) / GetPlayerCharacterMaxMp(slotIndex)
}
function GetPlayerCharacterExpProgress(slotIndex) {
    return GetPlayerCharacterCurrentExp(slotIndex) / GetPlayerCharacterNextExp(slotIndex)
}
function GetPlayerCharacterDraw(slotIndex) {
    return GetPlayerCharacterMeta(slotIndex).draw
}
function GetPlayerCharacterDrawBitmap(slotIndex) {
    var filename = GetPlayerCharacterDraw(slotIndex)
    return ImageManager.loadCharacterDraw(filename)
}
function GetPlayerCharacterStatesData(slotIndex) {
    return GetPlayerCharacter(slotIndex).states()
}
function GetPlayerCharacterState1Data(slotIndex) {
    return GetPlayerCharacterStatesData(slotIndex)[0]
}
function GetPlayerCharacterState2Data(slotIndex) {
    return GetPlayerCharacterStatesData(slotIndex)[1]
}
function GetPlayerCharacterState3Data(slotIndex) {
    return GetPlayerCharacterStatesData(slotIndex)[2]
}
function GetPlayerCharacterState1(slotIndex) {
    var data = GetPlayerCharacterState1Data(slotIndex)
    if (data == null) return 0
    return data.id
}
function GetPlayerCharacterState2(slotIndex) {
    var data = GetPlayerCharacterState2Data(slotIndex)
    if (data == null) return 0
    return data.id
}
function GetPlayerCharacterState3(slotIndex) {
    var data = GetPlayerCharacterState3Data(slotIndex)
    if (data == null) return 0
    return data.id
}
function GetPlayerCharacterSkillsData(slotIndex) {
    var character = GetPlayerCharacter(slotIndex)
    return character.skills()
}

function GetActorData(actorId) {
    return $dataActors[actorId]
}
function GetActorProfile(actorId) {
    return GetActorData(actorId).profile
}
function GetActorMeta(actorId) {
    return GetActorData(actorId).meta
}
function GetActorDescription1(actorId) {
    return GetActorMeta(actorId)['desc1']
}
function GetActorDescription2(actorId) {
    return GetActorMeta(actorId)['desc2']
}
function GetActorDraw(actorId) {
    return GetActorMeta(actorId)['draw']
}
function GetActorDrawBitmap(actorId) {
    return ImageManager.loadCharacterDraw(GetActorDraw(actorId))
}

class Control_Base extends Sprite {
    get globalX() {
        return this.x + (this.isParentExist() && this.parent.globalX != null
                    ? this.parent.globalX
                    : 0
            )
    }

    set globalX(value) {
        this.x = value - (this.isParentExist() && this.parent.globalX != null
                    ? this.parent.globalX
                    : 0
            )
    }

    get globalY() {
        return this.y + (this.isParentExist() && this.parent.globalY != null
                    ? this.parent.globalY
                    : 0
            )
    }

    set globalY(value) {
        this.y = value - (this.isParentExist() && this.parent.globalY != null
                    ? this.parent.globalY
                    : 0
            )
    }

    initialize(options) {
        super.initialize()

        this.options = options == null ? {} : options
        this.filterBooleanOption('visible', true)
        this.filterBooleanOption('active', true)
        this.filterFloatOption('anchorX', 0)
        this.filterFloatOption('anchorY', 0)

        if (this.options.children != null) {
            this.options.children.forEach(child => {
                this.addChild(child)
            })
        }

        this.visible = this.options.visible
        this._active = this.options.active
        this._handlers = {}
    }

    update() {
        super.update()
    }

    isParentExist() {
        return this.parent != null
    }

    filterBooleanOption(name, defaultValue) {
        var value = this.options[name]
        this.options[name] = value == null ? defaultValue : (value == "true" || value == true)
    }

    filterIntegerOption(name, defaultValue) {
        var value = this.options[name]
        this.options[name] = isNaN(value) || value == null ? defaultValue : parseInt(value)
    }

    filterFloatOption(name, defaultValue) {
        var value = this.options[name]
        this.options[name] = isNaN(value) || value == null ? defaultValue : parseFloat(value)
    }

    filterStringOption(name, defaultValue) {
        var value = this.options[name]
        this.options[name] = value == null ? defaultValue : value.toString()
    }

    /**
     * this option could input "string" and "function".
     * string - a function name from xml, find it in current active scene, if exist, register it.
     * function - a function from script, direct register it.
     */
    filterHandlerOption(symbol) {
        var value = this.options[symbol]
        if (value == null) return; // there should no empty handler.

        if (typeof(value) == "string") {
            this.registerGlobalHandler(symbol, value)
        }
        else {
            this.addHandler(symbol, value)
        }
    }

    registerGlobalHandler(symbol, methodName) {
        if (this.isGlobalMethodExist(methodName)) {
            this.addHandler(symbol, this.getGlobalMethod(methodName))
        }
        else {
            throw "Unregistered global method: " + methodName
        }
    }

    scene() {
        return SceneManager._scene
    }

    getSelectingPlayerCharacter() {
        return DevilGame.getCurrentActivePlayerCharacter()
    }

    isGlobalMethodExist(methodName) {
        return this.scene()[methodName] != null
    }

    getGlobalMethod(methodName) {
        return this.scene()[methodName].bind(this.scene())
    }

    isActive() {
        var node = this
        while (node) {
            if (!node._active) return false
            node = node.parent
        }
        return true
    }

    activate() {
        this._active = true
    }

    deactivate() {
        this._active = false
    }

    show() {
        this.visible = true
    }

    hide() {
        this.visible = false
    }

    addHandler(symbol, method) {
        if (!this.isHandled(symbol)) this._handlers[symbol] = []
        this._handlers[symbol].push(method)
    }

    isHandled(symbol) {
        return !!this._handlers[symbol]
    }

    /**
     * @param {string} symbol
     * @param {Object} [control=this]
     * @param {Object} [params=null]
     */
    callHandler(symbol, control, params) {
        control = control || this
        if (this.isHandled(symbol)) {
            this._handlers[symbol].forEach(function (method) {
                method(control, params)
            })
        }
    }

    create(controlList) {
        controlList.forEach(control => {
            this.addChild(control)
        })
    }
}
class Control_Text extends Control_Base {
    initialize(options) {
        super.initialize(options)

        this.filterIntegerOption('x', 0)
        this.filterIntegerOption('y', 0)
        this.filterIntegerOption('size', 24)
        this.filterIntegerOption('width', Graphics.width)
        this.filterIntegerOption('spacing', 0)
        this.filterStringOption('value', '')
        this.filterStringOption('font', 'Microsoft Yahei')
        this.filterStringOption('color', 'black')
        this.filterStringOption('align', 'left')

        this.bitmap = new Bitmap(Graphics.width, Graphics.height) // research: why after resize cannot effect on drawText at new Bitmap() or new Bitmap(0~4, 0~4) ?
        this.bitmap.fontFace = this.options.font
        this.bitmap.fontSize = this.options.size
        this.bitmap.textColor = this.options.color
        this.bitmap.outlineWidth = 0

        this.x = this.options.x
        this.y = this.options.y
        this.width = this.options.width // set width & height after setup Bitmap, or they'll be overwrite on Bitmap Loaded.
        this.height = Graphics.height
        if (this.options.align == 'center') this.anchor.x = 0.5
        else if (this.options.align == 'right') this.anchor.x = 1
        this._processText()
    }

    _processText() {
        let step, currentCharacter, escapeNext
        this.bitmap.clear()
        this.textState = {x: 0, y: 0}
        for (step = 0; step < this.options.value.length; step++) {
            currentCharacter = this.options.value[step]
            if (escapeNext) {
                escapeNext = false
                switch (currentCharacter) {
                    case 'n':
                        this._wrapLine()
                        break
                    default:
                        throw "Unregistered text escape character: " + currentCharacter
                        break
                }
            }
            else if (currentCharacter == '\\') {
                escapeNext = true
            }
            else if (currentCharacter == '\n') {
                this._wrapLine()
            }
            else {
                this._processCharacter(currentCharacter)
            }
        }
    }

    _processCharacter(character) {
        let width, nextX
        width = this._calcTextWidth(character)
        nextX = this.textState.x + width // for wrap detect.
        if (nextX > this.width) {
            this._wrapLine()
        }

        this.bitmap.drawText(character, this.textState.x, this.textState.y, null, this.options.size, 'left')
        this.textState.x += width
    }

    _wrapLine() {
        this.textState.x = 0
        this.textState.y += this.options.spacing + this.options.size
    }

    _calcTextWidth(text) {
        return Math.min(this.bitmap.measureTextWidth(text), this.options.width)
    }

    changeText(value) {
        this.options.value = value.toString()
        this._processText()
    }
}
class Control_Label extends Control_Text {
    initialize(options) {
        super.initialize(options)
        this.changeText(this.options.value)
    }

    changeText(value) {
        this.options.value = value.toString()
        this.width = this._calcTextWidth(this.options.value) + 4 // +4: fix rmmv bitmap draw width lost
        this._processText()
    }

    changeColorByIncreaseStatus(status) {
        switch (status) {
            case 0:
                this.bitmap.textColor = '#000000'
                break
            case 1:
                this.bitmap.textColor = '#abe134'
                break
            case 2:
                this.bitmap.textColor = '#ee2e06'
                break
        }
        this.changeText(this.options.value)
    }
}
class Control_Image extends Control_Base {
    initialize(options) {
        super.initialize(options)

        this.filterIntegerOption('x', 0)
        this.filterIntegerOption('y', 0)
        this.filterStringOption('src', '')
        this.filterHandlerOption('onLoaded')

        this.x = this.options.x
        this.y = this.options.y
        this.refresh()
        this.registerCallOnLoaded()
    }

    changeSource(source) {
        this.options.src = source
        this.refresh()
    }

    refresh() {
        if (this.options.src != '' && this.options.src != null) {
            this.bitmap = ImageManager.loadPicture(this.options.src)
        }
        else {
            this.bitmap = null
        }
    }

    registerCallOnLoaded() {
        if (this.options.src != '') {
            this.bitmap.addLoadListener(() => {
                this.callHandler('onLoaded')
            })
        }
    }
}
class Control_CharacterCard extends Control_Image {
    initialize(options) {
        Control_Base.prototype.initialize.call(this, options)

        this.filterIntegerOption('x', 0)
        this.filterIntegerOption('y', 0)
        this.filterStringOption('src', '')

        this.x = this.options.x
        this.y = this.options.y
        if (this.options.src != '') this.refreshCard()
    }

    refreshCard() {
        this.bitmap = ImageManager.loadCharacterCard(this.options.src)
    }

    changeCard(filename) {
        this.options.src = filename
        this.refreshCard()
    }
}
class Control_EntryDraw extends Control_Image {
    /*
     敌人的图片来源于敌人的数据库
     角色的图片来源于和人物相同的地址
     成就的图片额外用xlsx录入
     */
    changeDraw(type, name) {
        switch (type) {
            case "Enemy":
                this.bitmap = ImageManager.loadEnemyDraw(name)
                break
            case "Character":
                this.bitmap = ImageManager.loadCharacterDraw(name)
                break
            case "Achievement":
                this.bitmap = ImageManager.loadAchievementDraw(name)
                break
            default:
                this.bitmap = null
                break
        }
    }
}
class Control_CharacterHeadImage extends Control_Image {
    initialize(options) {
        Control_Base.prototype.initialize.call(this, options)

        this.filterIntegerOption('x', 0)
        this.filterIntegerOption('y', 0)
        this.filterStringOption('src', '')

        this.x = this.options.x
        this.y = this.options.y
        this.refreshHead()
    }

    refreshHead() {
        this.bitmap = ImageManager.loadCharacterHead(this.options.src)
    }

    changeHead(filename) {
        this.options.src = filename
        this.refreshHead()
    }
}
class Control_CharacterDraw extends Control_Image {
    initialize(options) {
        super.initialize(options)

        this.filterIntegerOption('x', 0)
        this.filterIntegerOption('y', 0)
        this.filterStringOption('src', '')

        this.x = this.options.x
        this.y = this.options.y
    }

    refresh() {
        if (this.options.src != '' && this.options.src != null) {
            this.bitmap = ImageManager.loadCharacterDraw(this.options.src)
        }
        else {
            this.bitmap = null
        }
    }

    changeDraw(filename) {
        this.options.src = filename
        this.refresh()
    }
}
class Control_Container extends Control_Base {
    initialize(options) {
        super.initialize(options)

        this.filterIntegerOption('x', 0)
        this.filterIntegerOption('y', 0)
        this.filterHandlerOption('onOpen')

        this.x = this.options.x
        this.y = this.options.y
    }
}
class Control_VerticalLayoutGroup extends Control_Container {
    initialize(options) {
        super.initialize(options)

        this.filterIntegerOption('spacing', 0)

        this.spacing = this.options.spacing
    }

    update() {
        super.update()
        this.updateLayout()
    }

    updateLayout() {
        var total = 0
        this.children.forEach(function (child) {
            child.y = total
            total += this.spacing
        }.bind(this))
    }
}
class Control_List extends Control_VerticalLayoutGroup {
    // TODO extract CharacterSkillList
}
class Control_CharacterSkillList extends Control_Container {
    initialize(options) {
        super.initialize(options)

        this.filterStringOption('background', '')
        this.filterStringOption('popupBackground', '')
        this.filterIntegerOption('itemListX', 0)
        this.filterIntegerOption('itemListY', 0)
        this.filterIntegerOption('itemListSpace', 41)
        this.filterIntegerOption('itemListWidth', 375)
        this.filterIntegerOption('itemListHeight', 244)
        this.filterIntegerOption('iconX', 0)
        this.filterIntegerOption('iconY', 0)
        this.filterIntegerOption('nameX', 0)
        this.filterIntegerOption('nameY', 0)
        this.filterIntegerOption('mpCostX', 0)
        this.filterIntegerOption('mpCostY', 0)
        this.filterStringOption('textColor', 'white')
        this.filterIntegerOption('textSize', 22)
        this.filterIntegerOption('popupTextX', 0)
        this.filterIntegerOption('popupTextY', 0)

        this.cancelPopupInteractiveRectPadding = 1
        this.create([
            this.backgroundImage = new Control_Image({
                src: this.options.background
            }),
            this.itemList = new Control_VerticalLayoutGroup({
                x: this.options.itemListX,
                y: this.options.itemListY,
                spacing: this.options.itemListSpace
            }),
            this.cancelPopupInteractiveRect = new Control_InteractiveRect({
                x: this.options.itemListX - this.cancelPopupInteractiveRectPadding,
                y: this.options.itemListY - this.cancelPopupInteractiveRectPadding,
                width: this.options.itemListWidth + this.cancelPopupInteractiveRectPadding * 2,
                onMouseLeave: this.cancelPopupMenu.bind(this)
            }),
            this.scrollBar = new Control_ScrollBar({
                x: this.options.itemListX + this.options.itemListWidth + 1,
                y: this.options.itemListY,
                height: this.getCurrentCharacterSkillScrollBarHeight()
            }),
            this.skillPopup = new Control_SkillPopup({
                visible: false,
                background: this.options.popupBackground,
                textX: this.options.popupTextX,
                textY: this.options.popupTextY
            }),
            this.scrollBarInteractiveRect = new Control_InteractiveRect({
                x: this.options.itemListX + this.options.itemListWidth,
                y: this.options.itemListY,
                width: 12,
                height: this.options.itemListHeight,
                onMouseDragging: this.onMouseDraggingScrollBar.bind(this)
            }),
            this.listInteractiveRect = new Control_InteractiveRect({
                x: this.options.itemListX,
                y: this.options.itemListY,
                onMouseScroll: this.onMouseScroll.bind(this)
            })
        ])
        this.appendItems()
        this.resetSkillRange()
        this.listInteractiveRect.changeSize(
            this.options.itemListWidth + this.scrollBarInteractiveRect.width,
            this.options.itemListHeight
        )
        this.refreshCancelPopupInteractiveRectHeight()
    }

    refreshCancelPopupInteractiveRectHeight() {
        this.cancelPopupInteractiveRect.changeHeight(
            this.itemList.spacing * (
                Math.min(this.getVisibleCharacterSkillCount(), this.getCurrentCharacterSkillCount())
            ) + this.cancelPopupInteractiveRectPadding * 2
        )
    }

    onMouseScroll(_, forward) {
        forward ? this.forwardSkillRange() : this.backwardSkillRange()
    }

    forwardSkillRange() {
        let count = this.getCurrentCharacterSkillCount()
        let visibleCount = this.getVisibleCharacterSkillCount()
        let maxIndex = count - 1
        if (this.skillRange.end < maxIndex) {
            this.skillPopup.hide() // hide for user experience & easy to code
            this.skillRange.end += 1
            this.skillRange.start = this.skillRange.end - (visibleCount - 1)
            this.refresh()
        }
    }

    backwardSkillRange() {
        let count = this.getCurrentCharacterSkillCount()
        let visibleCount = this.getVisibleCharacterSkillCount()
        let minIndex = 0
        if (this.skillRange.start > minIndex) {
            this.skillPopup.hide()
            this.skillRange.start -= 1
            this.skillRange.end = this.skillRange.start + (visibleCount - 1)
            this.refresh()
        }
    }

    appendItems() {
        for (var i = 0; i < 6; i++) {
            var item = new Control_CharacterSkillListItem({
                iconX: this.options.iconX,
                iconY: this.options.iconY,
                nameX: this.options.nameX,
                nameY: this.options.nameY,
                mpCostX: this.options.mpCostX,
                mpCostY: this.options.mpCostY,
                textColor: this.options.textColor,
                textSize: this.options.textSize,
                onMouseEnter: this.showSkillPopup.bind(this),
                onMouseMove: this.showSkillPopup.bind(this),
                width: this.options.itemListWidth,
                height: this.options.itemListHeight / 6,
                canHighlight: this.canHighlight.bind(this)
            })
            item.id = i
            this.itemList.addChild(item)
        }
    }

    resetSkillRange() {
        this.skillRange = {start: 0, end: 5}
    }

    canHighlight() {
        return !this.isDraggingScrollBar()
    }

    isDraggingScrollBar() {
        return this.scrollBarInteractiveRect.isMouseDragging()
    }

    onMouseDraggingScrollBar() {
        this.skillRange = this.scrollBarInteractiveRect.getCellListRangeByTouchPositionYInControl(
            this.getVisibleCharacterSkillCount(),
            this.getCurrentCharacterSkillCount()
        )
        this.refresh()
    }

    getVisibleCharacterSkillCount() {
        return 6
    }

    getCurrentCharacterSkillCount() {
        if (this.skillsData == null) return 0
        return this.skillsData.length
    }

    getCurrentCharacterSkillScrollBarY() {
        return this.options.itemListY + (this.options.itemListHeight * (this.skillRange.start / this.getCurrentCharacterSkillCount()))
    }

    getCurrentCharacterSkillScrollBarHeight() {
        return this.options.itemListHeight * Math.min(1, (
                this.getVisibleCharacterSkillCount() / this.getCurrentCharacterSkillCount()
            ))
    }

    refreshScrollBarY() {
        this.scrollBar.y = this.getCurrentCharacterSkillScrollBarY()
    }

    refreshScrollBarHeight() {
        this.scrollBar.changeHeight(this.getCurrentCharacterSkillScrollBarHeight())
    }

    showSkillPopup(hoveringButton, hoveringSkillData) {
        if (this.isDraggingScrollBar()
            || (this.skillPopup.visible && this.skillPopup.skillData == hoveringSkillData)) return

        this.skillPopup.changeSkillData(hoveringSkillData)
        this.skillPopup.globalX = hoveringButton.globalX
        this.skillPopup.globalY = hoveringButton.globalY + (hoveringButton.id <= 3 ? 50 : -150)
        this.skillPopup.show()
    }

    cancelPopupMenu() {
        this.skillPopup.hide()
    }

    changeSkillsData(skillsData) {
        this.skillsData = skillsData
        this.resetSkillRange()
        this.refresh()
    }

    refresh() {
        this.refreshScrollBarY()
        this.refreshScrollBarHeight()
        let children = this.itemList.children
        for (let i = 0; i < children.length; i++) {
            let child = children[i]
            let skillData = this.skillsData[this.skillRange.start + i]
            child.changeSkillData(skillData)
        }
    }
}
class Control_CharacterSkillListItem extends Control_Container {
    initialize(options) {
        super.initialize(options)

        this.filterIntegerOption('iconX', 0)
        this.filterIntegerOption('iconY', 0)
        this.filterIntegerOption('nameX', 0)
        this.filterIntegerOption('nameY', 0)
        this.filterIntegerOption('mpCostX', 0)
        this.filterIntegerOption('mpCostY', 0)
        this.filterHandlerOption('onMouseMove')
        this.filterHandlerOption('onMouseEnter')
        this.filterStringOption('textColor', 'white')
        this.filterIntegerOption('textSize', 22)
        this.filterIntegerOption('width', 375)
        this.filterIntegerOption('height', 41)
        this.filterHandlerOption('canHighlight')

        this.createHoverCover()
        this.createIcon()
        this.createName()
        this.createMpCost()
        this.createInteractiveRect()
    }

    changeSkillData(skillData) {
        this.skillData = skillData
        this.refresh()
    }

    refresh() {
        if (this.skillData == null) {
            this.iconImage.changeIcon(0)
            this.textName.changeText("")
            this.textMpCost.changeText("")
        }
        else {
            this.iconImage.changeIcon(this.skillData.iconIndex)
            this.textName.changeText(this.skillData.name)
            this.textMpCost.changeText(this.skillData.mpCost)
        }
    }

    createHoverCover() {
        this.hoverCover = new Control_ColorBlock({
            width: this.options.width,
            height: this.options.height,
            opacity: 50,
            visible: false
        })
        this.addChild(this.hoverCover)
    }

    createIcon() {
        this.iconImage = new Control_SkillIcon({
            x: this.options.iconX,
            y: this.options.iconY
        })
        this.addChild(this.iconImage)
    }

    createName() {
        this.textName = new Control_Text({
            x: this.options.nameX,
            y: this.options.nameY,
            color: this.options.textColor,
            size: this.options.textSize
        })
        this.addChild(this.textName)
    }

    createMpCost() {
        this.textMpCost = new Control_Text({
            x: this.options.mpCostX,
            y: this.options.mpCostY,
            color: this.options.textColor,
            size: this.options.textSize
        })
        this.addChild(this.textMpCost)
    }

    createInteractiveRect() {
        this.rectInteractive = new Control_InteractiveRect({
            width: this.options.width,
            height: this.options.height,
            onMouseEnter: this.onMouseEnter.bind(this),
            onMouseMove: this.onMouseMove.bind(this),
            onMouseLeave: this.onMouseLeave.bind(this)
        })
        this.addChild(this.rectInteractive)
    }

    canHighlight() {
        if (this.options.canHighlight == null) {
            return true
        }
        else {
            return this.options.canHighlight()
        }
    }

    onMouseEnter() {
        if (this.skillData != null) {
            if (this.canHighlight()) {
                this.callHandler('onMouseEnter', null, this.skillData)
                this.hoverCover.show()
            }
        }
    }

    onMouseMove() {
        if (this.skillData != null) {
            if (this.canHighlight()) {
                this.callHandler('onMouseMove', null, this.skillData)
                this.hoverCover.show()
            }
        }
    }

    onMouseLeave() {
        this.hoverCover.hide()
    }

    get height() {
        return this.rectInteractive.height
    }
}
class Control_SkillPopup extends Control_Container {
    textRectWidth() {
        return 330
    }

    initialize(options) {
        super.initialize(options)
        this.filterStringOption('background', '')
        this.filterIntegerOption('textX', 0)
        this.filterIntegerOption('textY', 0)
        this.create([
            this.background = new Control_Image({
                src: this.options.background
            }),
            this.text = new Control_Text({
                x: this.options.textX,
                y: this.options.textY,
                width: this.textRectWidth(),
                spacing: 10,
                color: "black"
            })
        ])
    }

    changeSkillData(skillData) {
        this.skillData = skillData
        this.refresh()
    }

    refresh() {
        let description = this.skillData.description
        this.text.changeText(`${description}`)
    }
}
class Control_ScrollBar extends Control_Container {
    initialize(options) {
        super.initialize(options)

        this.filterIntegerOption('height', -1)

        this.loadCount = 0
        this.visible = false
        this.createHeader()
        this.createBody()
        this.createFooter()
    }

    createHeader() {
        this.header = new Control_Image({
            src: 'scrollbar_top',
            onLoaded: this.processLoad.bind(this)
        })
        this.addChild(this.header)
    }

    createBody() {
        let bitmap = ImageManager.loadPicture('scrollbar_middle')
        bitmap.addLoadListener(this.processLoad.bind(this))
        this.body = new TilingSprite(bitmap)
        this.body.y = this.header.height
        this.addChild(this.body)
    }

    createFooter() {
        this.footer = new Control_Image({
            src: 'scrollbar_bottom',
            onLoaded: this.processLoad.bind(this)
        })
        this.footer.y = this.body.y + this.body.height
        this.addChild(this.footer)
    }

    processLoad() {
        if (++this.loadCount == 3) {
            this.onLoadRefreshHeight()
            this.body.width = this.body.bitmap.width
            this.visible = this.options.visible
        }
    }

    onLoadRefreshHeight() {
        this.refreshHeight(this.options.height)
    }

    isLoaded() {
        return this.loadCount == 3
    }

    changeHeight(height) {
        if (this.isLoaded()) {
            this.refreshHeight(height)
        }
        else {
            this.onLoadRefreshHeight = function () {
                this.refreshHeight(height)
            }
        }
    }

    refreshHeight(height) {
        if (height == -1) {
            height = this.header.height + this.body.bitmap.height + this.footer.height
        }

        this.body.height = height - this.header.height - this.footer.height

        this.body.y = this.header.height
        this.footer.y = height - this.footer.height
    }
}
class Control_HorizontalLayoutGroup extends Control_Container {
    initialize(options) {
        super.initialize(options)

        this.filterIntegerOption('spacing', 0)
        this.filterBooleanOption('pinMode', false)
        this.filterBooleanOption('sortById', false)
        this.filterBooleanOption('preventUpdate', false)

        this.spacing = this.options.spacing
    }

    update() {
        super.update()
        if (!this.options.preventUpdate) {
            this.updateLayout()
        }
    }

    updateLayout() {
        let total = 0
        let list
        if (this.options.sortById) {
            list = [].concat(this.children).sort(a, b => {
                return b.id - a.id
            })
        }
        else {
            list = this.children
        }
        list.forEach(child => {
            child.x = total
            total += this.spacing + (this.options.pinMode ? child.width : 0)
        })
    }
}
class Control_HorizontalSwitcherGroup extends Control_HorizontalLayoutGroup {
    initialize(options) {
        Control_HorizontalLayoutGroup.prototype.initialize.call(this, options)
        this._lastOpenedChild = null
    }

    addChild(child) {
        Control_HorizontalLayoutGroup.prototype.addChild.call(this, child)
        child.addHandler('onOpen', this.onChildOpen.bind(this))
    }

    onChildOpen(child) {
        if (this._lastOpenedChild) {
            this._lastOpenedChild.close()
        }
        this._lastOpenedChild = child
    }
}
class Control_ScrollListBase extends Control_Container {
    // ============================================================
    // Abstract
    // ============================================================

    /**
     * @abstract
     * x, y, spacing
     */
    getListBoxOptions() {
        return {}
    }

    /**
     * @abstract
     * class
     */
    getListItemClass() {
        return null
    }

    /**
     * @abstract
     */
    getListItemOptions() {
        return {}
    }

    /**
     * @abstract
     * class
     */
    getPopupClass() {
        return null
    }

    /**
     * @abstract
     */
    getPopupOptions() {
        return {}
    }

    /**
     * @abstract
     * x, y, width, height
     */
    getPopupCancelOptions() {
        return {}
    }

    /**
     * @abstract
     * x, y
     */
    getScrollBarOptions() {
        return {}
    }

    /**
     * @abstract
     * x, y, width, height
     */
    getScrollBarInteractiveRectOptions() {
        return {}; // x, y, width, height
    }

    /**
     * @abstract
     * @const scrollBarBoxHeight - height of box which contain scroll bar
     */
    getScrollBarBoxHeight() {
        return 4
    }

    /**
     * @abstract
     * @const visibleListItemCount - how many item will show to user?
     */
    getVisibleListItemCount() {
        return 0
    }

    /**
     * @abstract
     * @const realListItemCount - current real list item count, how many items here now?
     */
    calcListItemCount() {
        return 0
    }

    /**
     * @abstract
     * @param control current hovering control.
     */
    calcPopupGlobalY(control) {
        return 0
    }

    // ============================================================
    // Virtual
    // ============================================================

    /**
     * @virtual
     * @param control current hovering control.
     */
    calcPopupGlobalX(control) {
        return control.globalX
    }

    // ============================================================
    // Constant
    // ============================================================

    /**
     * dynamic calculate current scroll bar y.
     */
    calcScrollBarY() {
        let scrollBarBoxHeight = this.getScrollBarBoxHeight()
        let scrollRate = this.scrollRange.start / this.calcListItemCount()
        return scrollBarBoxHeight * scrollRate
    }

    /**
     * scroll bar's height, usually calculate it by list item box's height and rate between visible list item count and real list item count.
     * it won't greater than 1 for better UX.
     */
    calcScrollBarHeight() {
        return this.getScrollBarBoxHeight() * Math.min(1, (
                this.getVisibleListItemCount() / this.calcListItemCount()
            ))
    }

    resetScrollRange() {
        this.scrollRange = {
            start: 0,
            end: this.getVisibleListItemCount() - 1
        }
    }

    initialize(options) {
        Control_Container.prototype.initialize.call(this, options)

        this.createListBox()
        this.createPopup()
        this.createPopupCancelRect()
        this.createScrollBar()
        this.createScrollBarInteractiveRect()
        this.resetScrollRange()
    }

    createListBox() {
        this.listBox = new Control_VerticalLayoutGroup(this.getListBoxOptions())
        for (let index = 0; index < this.getVisibleListItemCount(); index++) {
            this.createListItem(index)
        }
        this.addChild(this.listBox)
    }

    createListItem(index) {
        let listItemClass = this.getListItemClass()
        let listItemOptions = this.getListItemOptions()

        let listItem = new listItemClass(listItemOptions)
        listItem.id = index

        this.listBox.addChild(listItem)
    }

    createPopup() {
        let popupClass = this.getPopupClass()
        let popupOptions = this.getPopupOptions()

        this.popup = new popupClass(popupOptions)

        this.addChild(this.popup)
    }

    createPopupCancelRect() {
        let popupCancelOptions = this.getPopupCancelOptions()

        this.popupCancelRect = new Control_InteractiveRect({
            x: popupCancelOptions.x || 0,
            y: popupCancelOptions.y || 0,
            width: popupCancelOptions.width || 4,
            height: popupCancelOptions.height || 4,
            onMouseLeave: this.cancelPopup.bind(this)
        })

        this.addChild(this.popupCancelRect)
    }

    createScrollBar() {
        let scrollBarOptions = this.getScrollBarOptions()

        /**
         * draggable scroll bar, it's a block.
         */
        this.scrollBar = new Control_ScrollBar({
            x: scrollBarOptions.x,
            y: scrollBarOptions.y,
            height: this.calcScrollBarHeight()
        })

        this.addChild(this.scrollBar)
    }

    createScrollBarInteractiveRect() {
        let scrollBarOptions = this.getScrollBarInteractiveRectOptions()

        this.scrollBarInteractiveRect = new Control_InteractiveRect({
            x: scrollBarOptions.x,
            y: scrollBarOptions.y,
            width: scrollBarOptions.width,
            height: scrollBarOptions.height,
            onMouseDragging: this.onMouseDraggingScrollBar.bind(this)
        })

        this.addChild(this.scrollBarInteractiveRect)
    }

    onMouseDraggingScrollBar(control) {
        this.scrollRange = control.getCellListRangeByTouchPositionYInControl(
            this.getVisibleListItemCount(),
            this.calcListItemCount()
        )
        this.refresh()
    }

    refreshScrollBarY() {
        this.scrollBar.y = this.calcScrollBarY()
    }

    refreshScrollBarHeight() {
        this.scrollBar.changeHeight(this.calcScrollBarHeight())
    }

    showPopup(control, data) {
        if (this.scrollBarInteractiveRect.isMouseDragging()) {
            this.popup.hide()
        }
        else {
            this.popup.changeData(data)
            this.popup.globalX = this.calcPopupGlobalX()
            this.popup.globalY = this.calcPopupGlobalY()
            this.popup.show()
        }
    }

    cancelPopup() {
        this.popup.hide()
    }

    changeData(data) {
        this.data = data
        this.resetScrollRange()
        this.refresh()
    }

    refresh() {
        this.refreshScrollBarY()
        this.refreshScrollBarHeight()

        let children = this.listBox.children
        for (let i = 0; i < children.length; i++) {
            let listItem = children[i]
            let singleData = this.data[this.scrollRange.start + i]
            listItem.changeData(singleData)
        }
    }
}
class Control_OptionBoard extends Control_Container {
    initialize(options) {
        Control_Container.prototype.initialize.call(this, options)
        this.createComponents()
    }

    createComponents() {
        this.hardOptions = []
        this.hardOptions[0] = new Control_Button({
            x: 509 + 146 * 0,
            y: 170,
            width: 146,
            height: 41,
            useStatus: true,
            onOpen: this.changeHard.bind(this)
        })
        this.hardOptions[1] = new Control_Button({
            x: 509 + 146 * 1,
            y: 170,
            width: 146,
            height: 41,
            useStatus: true,
            onOpen: this.changeHard.bind(this)
        })
        this.hardOptions[2] = new Control_Button({
            x: 509 + 146 * 2,
            y: 170,
            width: 146,
            height: 41,
            useStatus: true,
            onOpen: this.changeHard.bind(this)
        })
        this.addChild(this.hardOptions[0])
        this.addChild(this.hardOptions[1])
        this.addChild(this.hardOptions[2])

        this.screenOptions = []
        this.screenOptions[0] = new Control_Button({
            x: 509 + 146 * 0,
            y: 170 + 60,
            width: 146,
            height: 41,
            useStatus: true,
            onOpen: this.changeScreen.bind(this)
        })
        this.screenOptions[1] = new Control_Button({
            x: 509 + 146 * 1,
            y: 170 + 60,
            width: 146,
            height: 41,
            useStatus: true,
            onOpen: this.changeScreen.bind(this)
        })
        this.screenOptions[2] = new Control_Button({
            x: 509 + 146 * 2,
            y: 170 + 60,
            width: 146,
            height: 41,
            useStatus: true,
            onOpen: this.changeScreen.bind(this)
        })
        this.addChild(this.screenOptions[0])
        this.addChild(this.screenOptions[1])
        this.addChild(this.screenOptions[2])

        this.languageOptions = []
        this.languageOptions[0] = new Control_Button({
            x: 509 + 146 * 0,
            y: 170 + 60 * 2,
            width: 146,
            height: 41,
            useStatus: true,
            onOpen: this.changeLanguage.bind(this)
        })
        this.languageOptions[1] = new Control_Button({
            x: 509 + 146 * 1,
            y: 170 + 60 * 2,
            width: 146,
            height: 41,
            useStatus: true,
            onOpen: this.changeLanguage.bind(this)
        })
        this.languageOptions[2] = new Control_Button({
            x: 509 + 146 * 2,
            y: 170 + 60 * 2,
            width: 146,
            height: 41,
            useStatus: true,
            onOpen: this.changeLanguage.bind(this)
        })
        this.addChild(this.languageOptions[0])
        this.addChild(this.languageOptions[1])
        this.addChild(this.languageOptions[2])

        this.musicBar = new Control_Progress({x: 541, y: 362, width: 370, height: 25, color: "#d3bc89", value: 1})
        this.soundBar = new Control_Progress({x: 541, y: 421, width: 370, height: 25, color: "#d3bc89", value: 1})
        this.musicBarControl = new Control_InteractiveRect({x: 541, y: 362, width: 370, height: 25})
        this.soundBarControl = new Control_InteractiveRect({x: 541, y: 421, width: 370, height: 25})
        this.musicBarControl.addHandler('onMouseDragging', c => {
            let per = c.getTouchXInControlPercentage()
            per = Math.max(0, per)
            per = Math.min(per, 1)
            this.musicBar.changeProgress(per)
        })
        this.soundBarControl.addHandler('onMouseDragging', c => {
            let per = c.getTouchXInControlPercentage()
            per = Math.max(0, per)
            per = Math.min(per, 1)
            this.soundBar.changeProgress(per)
        })
        this.addChild(this.musicBar)
        this.addChild(this.soundBar)
        this.addChild(this.musicBarControl)
        this.addChild(this.soundBarControl)

        this.commandOptions = []
        this.commandOptions[0] = new Control_Button({
            x: 645,
            y: 470,
            width: 85,
            height: 41,
            useStatus: true,
            onOpen: this.changeCommand.bind(this)
        })
        this.commandOptions[1] = new Control_Button({
            x: 730,
            y: 470,
            width: 85,
            height: 41,
            useStatus: true,
            onOpen: this.changeCommand.bind(this)
        })
        this.addChild(this.commandOptions[0])
        this.addChild(this.commandOptions[1])
    }

    changeHard(c) {
        for (let i = 0; i < 3; i++) {
            let cc = this.hardOptions[i]
            if (cc == c) {
                this.setHard(i)
            }
            else {
                cc.changeStatus(false)
            }
        }
    }

    changeScreen(c) {
        for (let i = 0; i < 3; i++) {
            let cc = this.screenOptions[i]
            if (cc == c) {
                this.setScreen(i)
            }
            else {
                cc.changeStatus(false)
            }
        }
    }

    changeLanguage(c) {
        for (let i = 0; i < 3; i++) {
            let cc = this.languageOptions[i]
            if (cc == c) {
                this.setLanguage(i)
            }
            else {
                cc.changeStatus(false)
            }
        }
    }

    changeCommand(c) {
        for (let i = 0; i < 2; i++) {
            let cc = this.commandOptions[i]
            if (cc == c) {
                this.setCommand(i)
            }
            else {
                cc.changeStatus(false)
            }
        }
    }

    setHard(index) {
        // TODO
    }

    setScreen(index) {
        // TODO
    }

    setLanguage(index) {
        // TODO
    }

    setCommand(index) {
        // TODO
    }
}
class Control_EntryList extends Control_Container {
    initialize(options) {
        super.initialize(options)
        this.filterHandlerOption('onEnterItem')
        this.filterStringOption('background')
        this.initializeMembers()

        this.create([
            this.background = new Control_Image({src: this.options.background}),
            this.itemList = new Control_VerticalLayoutGroup({x: this.itemListX, y: this.itemListY, spacing: 41}),
            this.toggleItems.common = new Control_Button({
                x: 15,
                y: 14,
                width: 383,
                height: 36,
                onClick: this.gotoEnemy.bind(this)
            }),
            this.toggleItems.special = new Control_Button({
                x: 15,
                y: 347,
                width: 383,
                height: 34,
                onClick: this.gotoCharacter.bind(this)
            }),
            this.toggleItems.equipment = new Control_Button({
                x: 15,
                y: 387,
                width: 383,
                height: 33,
                onClick: this.gotoAchievement.bind(this)
            }),
            this.scrollBar = new Control_ScrollBar({
                x: this.itemListX + this.itemWidth + 1,
                y: this.itemListY,
                height: this.getCurrentScrollBarHeight()
            }),
            this.scrollBarInteractiveRect = new Control_InteractiveRect({
                x: this.itemListX + this.itemWidth,
                y: this.itemListY,
                width: 12,
                height: this.itemListHeight,
                onMouseTouchPressing: this.onMouseTouchPressingScrollBar.bind(this)
            }),
            this.test = new Control_ColorBlock({
                x: this.itemListX + this.itemWidth,
                y: this.itemListY,
                width: 12,
                height: this.itemListHeight
            })
        ])

        for (let i = 0; i < 7; i++) {
            let item = new Control_EntryListItem({
                buttonWidth: this.itemWidth,
                buttonHeight: this.itemListHeight / 7,
                onMouseEnter: this.onEnterItem.bind(this)
            })
            item.id = i
            this.itemList.addChild(item)
        }
        this.gotoEnemy()
    }

    initializeMembers() {
        this.lastClickedToggleItem = null
        this.itemRange = {start: 0, end: 6}
        this.itemsData = []
        this.selectingItemData = null

        this.itemListX = 15
        this.itemListY = 54
        this.itemWidth = 370
        this.itemListHeight = 287
        this.visibleItemCount = 7
        this.toggleItems = {}
    }

    resetItemRange() {
        this.itemRange = {start: 0, end: 6}
    }

    /**
     * @param {Control_InteractiveRect} control
     */
    onMouseTouchPressingScrollBar(control) {
        console.log('touch', TouchInput.y, control.getCanvasPositionYInControlPercentage(TouchInput.y), control.getCellListRangeByCanvasPositionYInControl(TouchInput.y))
        this.itemRange = control.getCellListRangeByTouchPositionYInControl(
            this.visibleItemCount,
            this.getCurrentItemCount()
        )
        this.refreshScroll()
        this.refreshItemsData()
    }

    onEnterItem(control) {
        this.callHandler('onEnterItem', control)
    }

    getCurrentItemListY() {
        switch (this.status) {
            case "Enemy":
                return this.itemListY
            case "Character":
                return this.itemListY + 40
            case "Achievement":
                return this.itemListY + 81
            default:
                throw "UNKNOWN STATUS"
        }
    }

    getCurrentScrollBarHeight() {
        return this.itemListHeight * Math.min(1, (
                this.visibleItemCount / this.getCurrentItemCount()
            ))
    }

    getCurrentScrollBarY() {
        return this.getCurrentItemListY() + (this.itemListHeight * (this.itemRange.start / this.getCurrentItemCount()))
    }

    getCurrentItemCount() {
        return this.itemsData.length
    }

    gotoEnemy() {
        this.resetItemRange()
        this.status = 'Enemy'
        this.refreshStatus()
        this.background.changeSource('menu_entry_list_1')
        this.switchToggle(this.toggleItems.common)
        this.itemList.y = this.getCurrentItemListY()
        this.scrollBarInteractiveRect.y = this.getCurrentItemListY()
        this.toggleItems.special.y = 347
        this.toggleItems.equipment.y = 387
        this.refreshScroll()
    }

    gotoCharacter() {
        this.resetItemRange()
        this.status = 'Character'
        this.refreshStatus()
        this.background.changeSource('menu_entry_list_2')
        this.switchToggle(this.toggleItems.special)
        this.itemList.y = this.getCurrentItemListY()
        this.scrollBarInteractiveRect.y = this.getCurrentItemListY()
        this.toggleItems.equipment.y = 387
        this.refreshScroll()
    }

    gotoAchievement() {
        this.resetItemRange()
        this.status = 'Achievement'
        this.refreshStatus()
        this.background.changeSource('menu_entry_list_3')
        this.switchToggle(this.toggleItems.equipment)
        this.itemList.y = this.getCurrentItemListY()
        this.scrollBarInteractiveRect.y = this.getCurrentItemListY()
        this.toggleItems.special.y = 52
        this.refreshScroll()
    }

    switchToggle(nextToggleItem) {
        if (this.lastClickedToggleItem != null) {
            this.lastClickedToggleItem.active = true
            this.lastClickedToggleItem.visible = true
        }
        nextToggleItem.active = false
        nextToggleItem.visible = false

        this.lastClickedToggleItem = nextToggleItem
    }

    refreshScroll() {
        this.scrollBar.y = this.getCurrentScrollBarY()
        this.scrollBar.changeHeight(this.getCurrentScrollBarHeight())
        this.refreshItemsData()
    }

    refreshStatus() {
        switch (this.status) {
            case 'Enemy':
                this.itemsData = GetEntryEnemy()
                break
            case 'Character':
                this.itemsData = GetEntryCharacter()
                break
            case 'Achievement':
                this.itemsData = GetEntryAchievement()
                break
        }
        this.refreshItemsData()
    }

    refreshItemsData() {
        let children = this.itemList.children
        for (let i = 0; i < children.length; i++) {
            /**
             * @type {Control_EntryListItem}
             */
            let child = children[i]
            let itemData
            if (this.itemRange == null) itemData = null
            else itemData = this.itemsData[this.itemRange.start + i]
            child.changeData(itemData)
        }
    }
}
class Control_EntryListItem extends Control_Container {
    initialize(options) {
        super.initialize(options)

        this.filterIntegerOption('buttonWidth', 1)
        this.filterIntegerOption('buttonHeight', 1)
        this.filterStringOption('type', '')
        this.filterHandlerOption('onMouseEnter')

        this.create([
            this.button = new Control_Button({
                width: this.options.buttonWidth,
                height: this.options.buttonHeight,
                onMouseEnter: this.onMouseEnter.bind(this)
            }),
            this.itemName = new Control_Text({x: 20, y: 10, size: 20})
        ])
    }

    changeData(itemData) {
        this.itemName.changeText(itemData.name)
        this.itemData = itemData
    }

    onMouseEnter() {
        this.callHandler('onMouseEnter')
    }
}
class Control_List extends Control_Container {
    initialize(options) {
        super.initialize(options)
        this.filterFloatOption('spacing', 100)
        this.spacing = this.options.spacing
    }

    update() {
        super.update()
        this.updateLayout()
    }

    updateLayout() {
        let total = 0
        this.children.forEach(child => {
            child.y = total
            total += this.spacing
        })
    }

    get itemCount() {
        return this.children.length
    }
}
class Control_CharacterPartyMember extends Control_Container {
    initialize(options) {
        super.initialize(options)
        this.filterHandlerOption("onPreviewCharacter")
        this.initializeMembers()
        this.createComponents()
        this.setActiveCard(0)
    }

    initializeMembers() {
        this.currentActiveId = -1
        this.cardSortBox = []
    }

    createComponents() {
        this.createInteractiveRects()
        this.createCards()
    }

    createInteractiveRects() {
        this.interactiveRects = new Control_HorizontalLayoutGroup({
            spacing: 0,
            pinMode: true
        })
        for (let i = 0; i < 4; i++) {
            let interactiveRect = new Control_Button({
                width: i == 0 ? 232 : 61,
                height: 462,
                onMouseEnter: this.onMouseEnterMember.bind(this),
                onClick: this.onClickMember.bind(this)
            })
            interactiveRect.id = i
            this.interactiveRects.addChild(interactiveRect)
        }
        this.addChild(this.interactiveRects)
    }

    createCards() {
        this.cards = new Control_HorizontalLayoutGroup({
            spacing: 61,
            preventUpdate: true
        })
        for (let i = 0; i < 4; i++) {
            let card = new Control_CharacterCard({
                src: GetPlayerCharacterCard(i)
            })
            card.id = i
            this.cardSortBox.push(card)
            this.cards.addChild(card)
        }
        this.cards.updateLayout()
        this.addChild(this.cards)
    }

    setActiveCard(id) {
        if (this.currentActiveId == id) {
            return
        }

        this.currentActiveId = id
        for (let i = 0; i < 4; i++) {
            this.interactiveRects.children[i].changeWidth(i == id ? 232 : 61)
        }

        // Sort
        for (let i = 3; i >= 0; i--) this.cards.addChildAt(this.cardSortBox[i], 3)
        for (let i = 0; i <= id; i++) this.cards.addChildAt(this.cardSortBox[i], 3)
    }

    onMouseEnterMember(c) {
        this.setActiveCard(c.id)
        this.callHandler("onPreviewCharacter")
    }

    onClickMember(c) {
        let id = c.id
        if (id == 0) return
        $gameParty.swapOrder(0, id)
        this.recreate()
    }

    recreate() {
        this.removeComponents()
        this.initializeMembers()
        this.createComponents()
        this.setActiveCard(0)
    }

    removeComponents() {
        this.removeChild(this.interactiveRects)
        this.removeChild(this.cards)
    }

}
class Control_CharacterPartyInfo extends Control_Container {
    initialize(options) {
        Control_Container.prototype.initialize.call(this, options)
        this.filterIntegerOption('nameX', 0)
        this.filterIntegerOption('nameY', 0)
        this.filterIntegerOption('spacing', 41)
        this.filterIntegerOption('talentX', 0)
        this.filterIntegerOption('talentY', 0)
        this.filterIntegerOption('talentWidth', 0)
        this.createName()
        this.createTalent()
    }

    createName() {
        this.name = new Control_Label({
            x: this.options.nameX,
            y: this.options.nameY,
            value: "Name",
            color: "black",
            spacing: this.options.spacing,
            align: "center"
        })
        this.addChild(this.name)
    }

    createTalent() {
        this.talent = new Control_Text({
            x: this.options.talentX,
            y: this.options.talentY,
            width: this.options.talentWidth,
            value: "Talent",
            color: "black",
            spacing: this.options.spacing,
            size: 22
        })
        this.addChild(this.talent)
    }

    changeActor(actor) {
        let data = actor.actor()
        this.name.changeText(data.name)
        let talentA = data.meta.talent
        if (talentA == null) {
            console.error('miss talent at actor!', data)
        }
        let talentNameA = talentA.split('\n')[0]
        let talentDescA = talentA.split('\n')[1]
        let talentB = $dataClasses[data.classId].meta.talent
        if (talentB == null) {
            console.error('miss talent at class!', $dataClasses[data.classId])
        }
        let talentNameB = talentB.split('\n')[0]
        let talentDescB = talentB.split('\n')[1]
        this.talent.changeText(`${talentNameA}\n${talentDescA}\n${talentNameB}\n${talentDescB}`)
        console.log(`${talentNameA}\n${talentDescA}\n${talentNameB}\n${talentDescB}`)
    }

}
class Control_ArchiveCard extends Control_Container {
    initialize(options) {
        Control_Container.prototype.initialize.call(this, options)
        this.create([
            this.background = new Control_Image({src: "menu_save_card"}),
            this.status1 = new Control_Container({
                children: [
                    this.hoverCover = new Control_Button({
                        width: 769,
                        height: 141,
                        onClick: this.onManipulate.bind(this)
                    }),
                    this.head = new Control_CharacterHeadImage({x: 40, y: 30, src: 1}),
                    this.name = new Control_Text({x: 155, y: 38, color: "black", size: 30, value: "快速存档"}),
                    this.desc = new Control_Text({x: 155, y: 83, color: "black", size: 24, value: "重生"}),
                    this.time = new Control_Label({
                        x: 735,
                        y: 38,
                        color: "black",
                        size: 30,
                        align: "right",
                        value: "2017.04.21 12:01"
                    }),
                    this.past = new Control_Label({
                        x: 735,
                        y: 83,
                        color: "black",
                        size: 24,
                        align: "right",
                        value: "已经经历100天"
                    }),
                ]
            }),
            this.status2 = new Control_Container({
                visible: false, active: false, children: [
                    this.selectBackground = new Control_ColorBlock({opacity: 100, color: "black"}),
                    this.loadButton = new Control_Button({
                        x: 217,
                        y: 50,
                        width: 150,
                        height: 50,
                        onClick: this.onLoad.bind(this)
                    }),
                    this.loadText = new Control_Label({x: 239, y: 60, color: "black", size: 30, value: "读取 (L)"}),
                    this.saveButton = new Control_Button({
                        x: 432,
                        y: 50,
                        width: 150,
                        height: 50,
                        onClick: this.onSave.bind(this)
                    }),
                    this.saveText = new Control_Label({x: 455, y: 60, color: "black", size: 30, value: "存储 (S)"}),
                ]
            })
        ])
    }

    onManipulate() {
        this.status1.hide()
        this.status1.deactivate()
        this.status2.show()
        this.status2.activate()
    }

    onLoad() {
        if (DataManager.loadGame(this.savefileId())) {
            this.onLoadSuccess()
        } else {
            this.onLoadFailure()
        }

        this.status2.hide()
        this.status2.deactivate()
        this.status1.show()
        this.status1.activate()
    }

    onSave() {
        $gameSystem.onBeforeSave()
        if (DataManager.saveGame(this.savefileId())) {
            this.onSaveSuccess()
        } else {
            this.onSaveFailure()
        }

        this.status2.hide()
        this.status2.deactivate()
        this.status1.show()
        this.status1.activate()
    }

    onSaveSuccess() {
        SoundManager.playSave()
        StorageManager.cleanBackup(this.savefileId())
    }

    onSaveFailure() {
        SoundManager.playBuzzer()
    }

    onLoadSuccess() {
        SoundManager.playLoad()
        this.reloadMapIfUpdated()
        SceneManager.goto(Scene_Map)
        this.scene()._loadSuccess = true
    }

    onLoadFailure() {
        SoundManager.playBuzzer()
        this.activateListWindow()
    }

    savefileId() {
        return this._savefileId; // 1 ~ N
    }

    changeData(itemData) {
        this._savefileId = itemData.id
        this.head.changeHead(itemData.head)
        this.desc.changeText(itemData.desc)
        this.time.changeText(itemData.time)
        this.past.changeText("已经经历" + itemData.past + "天")
        console.log(itemData)
    }
}
class Control_EquipmentPopup extends Control_Container {
    initialize(options) {
        super.initialize(options)
        this.create([
            this.background = new Control_Image({
                src: 'menu_equipment_popup',
                visible: false
            }),
            this.description = new Control_Text({
                x: 25,
                y: 25,
                size: 24,
                width: 324,
                spacing: 10,
                color: 'black',
                visible: false
            })
        ])
    }

    show() {
        this.background.visible = true
        this.description.visible = true
    }

    hide() {
        this.background.visible = false
        this.description.visible = false
    }

    changeItemData(itemData) {
        if (itemData == null) {
            this.description.changeText("")
        }
        else {
            this.description.changeText(itemData.description)
        }
    }
}
class Control_CharacterEquipmentList extends Control_Container {
    initialize(options) {
        super.initialize(options)
        this.filterHandlerOption('onClickSwitchEquipment')
        this.filterHandlerOption('onUseBest')
        this.filterHandlerOption('onPreviewBest')
        this.filterHandlerOption('onUseUnloadAll')
        this.filterHandlerOption('onPreviewUnloadAll')
        this.filterHandlerOption('onStopPreview')
        this.initializeMembers()
        this.createComponents()
    }

    initializeMembers() {
        this.nameList = ["武器", "盾牌", "防护", "外观", "额外", "称号"]
        this._selectingSlotId = 0
        this.slotCount = 6
    }

    createComponents() {
        this.createButtonRecommendEquipment()
        this.createButtonUnloadAllEquipment()
        this.createPreviewCancelRect()
        this.createItemListBackground()
        this.createItemList()
        this.createPopup()
        this.createPopupCancelRect()
    }

    createButtonRecommendEquipment() {
        this.buttonRecommandEquipment = new Control_Button({
            x: 0,
            y: 245,
            width: 383,
            height: 41,
            onClick: this.onUseBest.bind(this),
            onMouseEnter: this.options.onPreviewBest
        })
        this.addChild(this.buttonRecommandEquipment)
    }

    onUseBest() {
        this.callHandler('onUseBest')
        this.refresh()
    }

    createButtonUnloadAllEquipment() {
        this.buttonUnloadAllEquipment = new Control_Button({
            x: 0,
            y: 286,
            width: 383,
            height: 41,
            onClick: this.onUseUnloadAll.bind(this),
            onMouseEnter: this.options.onPreviewUnloadAll
        })
        this.addChild(this.buttonUnloadAllEquipment)
    }

    onUseUnloadAll() {
        this.callHandler('onUseUnloadAll')
        this.refresh()
    }

    createItemListBackground() {
        this.itemListBackground = new Control_Image({
            x: -9,
            y: -130,
            src: 'menu_equipment_list'
        })
        this.addChild(this.itemListBackground)
    }

    createItemList() {
        this.itemList = new Control_VerticalLayoutGroup({
            spacing: 41
        })
        for (var i = 0; i < 6; i++) {
            var item = new Control_CharacterEquipmentListItem({
                width: 385,
                height: 41,
                label: this.nameList[i],
                onMouseEnter: this.showPopup.bind(this),
                onClick: this.onClickSwitchEquipment.bind(this)
            })
            item.id = i
            this.itemList.addChild(item)
        }
        this.addChild(this.itemList)
    }

    createPopup() {
        this.popup = new Control_EquipmentPopup()
        this.addChild(this.popup)
    }

    createPopupCancelRect() {
        let padding = 5
        this.popupCancelRect = new Control_InteractiveRect({
            x: 0 - padding,
            y: 0 - padding,
            width: 380 + padding * 2,
            height: 242 + padding * 2,
            onMouseLeave: this.hidePopup.bind(this)
        })
        this.addChild(this.popupCancelRect)
    }

    createPreviewCancelRect() {
        let padding = 5
        this.popupCancelRect = new Control_InteractiveRect({
            x: 0 - padding,
            y: 245 - padding,
            width: 383 + padding * 2,
            height: 84 + padding * 2,
            onMouseLeave: this.options.onStopPreview
        })
        this.addChild(this.popupCancelRect)
    }

    showPopup(listItem) {
        if (listItem.itemData != null) {
            this.popup.changeItemData(listItem.itemData)
            this.popup.globalY = listItem.globalY + 46
            this.popup.show()
        }
        else {
            this.popup.hide()
        }
    }

    hidePopup() {
        this.popup.hide()
    }

    onClickSwitchEquipment(listItem) {
        this.visible = false
        this.active = false
        this._selectingSlotId = listItem.id
        this.callHandler('onClickSwitchEquipment')
    }

    refresh() {
        console.log('execute refresh')
        this.itemsData = this.getSelectingPlayerCharacter().equips()
        console.log('update selecting character equipment list', this.itemsData, 'from', this.getSelectingPlayerCharacter())
        for (let i = 0; i < this.slotCount; i++) {
            this.itemList.children[i].changeItemData(this.itemsData[i])
        }
    }

    open() {
        this.activate()
        this.show()
    }

    close() {
        this.deactivate()
        this.hide()
        this.popup.hide()
    }

    getSelectingSlotId() {
        return this._selectingSlotId
    }

    getSelectingEtypeId() {
        return this._selectingSlotId + 1
    }
}
class Control_CharacterEquipmentStatus extends Control_Container {
    initialize(options) {
        super.initialize(options)
        this.initializeMembers()
        this.createComponents()
    }

    initializeMembers() {
        this.fakeActor = null; // for equipment status temporary data test.
        this.baseLineColor = '#eacf95'
        this.growLineColor = '#abc64b'
        this.reduceLineColor = '#ee2e06'
        this.mapSize = 228
        this.mapRadius = this.mapSize / 2
        this.agiMax = 100
        this.lukMax = 100
        this.specialValueColor = "#d0b883"
        this.maxBaseValues = [200, 200, 200, 200, 9999, 9999]; // def, atk, mat, mdf, mhp, mmp
        this.raderMapLineWidth = 3
    }

    createComponents() {
        this.createBackground()
        this.createRaderMap()
        this.createRaderMapText()
        this.createAgiBar()
        this.createLukBar()
        this.createIcon()
        this.createPattern()
    }

    createBackground() {
        this.background = new Control_Image({
            x: 269,
            y: 155,
            src: 'menu_character_equipment_status_background'
        })
        this.addChild(this.background)
    }

    createRaderMap() {
        this.baseMap = new Bitmap(this.mapSize, this.mapSize)
        //this.baseMap.fillAll("#FFF")
        let sprite = new Sprite(this.baseMap)
        sprite.x = 312
        sprite.y = 180
        //sprite.opacity = 155
        this.addChild(sprite)

        this.fakeBaseMap = new Bitmap(this.mapSize, this.mapSize)
        let fakeSprite = new Sprite(this.fakeBaseMap)
        fakeSprite.x = 312
        fakeSprite.y = 180
        this.addChild(fakeSprite)
    }

    createRaderMapText() {
        this.baseMapText = []
        this.baseMapText[0] = new Control_Label({
            x: 560,
            y: 308,
            value: 100,
            size: 18,
            color: "black",
            align: "center"
        })
        this.baseMapText[1] = new Control_Label({
            x: 485,
            y: 177,
            value: 100,
            size: 18,
            color: "black",
            align: "center"
        })
        this.baseMapText[2] = new Control_Label({
            x: 370,
            y: 177,
            value: 100,
            size: 18,
            color: "black",
            align: "center"
        })
        this.baseMapText[3] = new Control_Label({
            x: 290,
            y: 308,
            value: 100,
            size: 18,
            color: "black",
            align: "center"
        })
        this.baseMapText[4] = new Control_Label({
            x: 370,
            y: 423,
            value: 100,
            size: 18,
            color: "black",
            align: "center"
        })
        this.baseMapText[5] = new Control_Label({
            x: 485,
            y: 423,
            value: 100,
            size: 18,
            color: "black",
            align: "center"
        })
        this.addChild(this.baseMapText[0])
        this.addChild(this.baseMapText[1])
        this.addChild(this.baseMapText[2])
        this.addChild(this.baseMapText[3])
        this.addChild(this.baseMapText[4])
        this.addChild(this.baseMapText[5])

        this.baseMapName = []
        this.baseMapName[0] = new Control_Label({
            x: 567,
            y: 284,
            value: "物防",
            size: 18,
            color: "black",
            align: "center"
        })
        this.baseMapName[1] = new Control_Label({
            x: 485,
            y: 153,
            value: "物攻",
            size: 18,
            color: "black",
            align: "center"
        })
        this.baseMapName[2] = new Control_Label({
            x: 370,
            y: 153,
            value: "魔攻",
            size: 18,
            color: "black",
            align: "center"
        })
        this.baseMapName[3] = new Control_Label({
            x: 290,
            y: 284,
            value: "魔防",
            size: 18,
            color: "black",
            align: "center"
        })
        this.baseMapName[4] = new Control_Label({
            x: 370,
            y: 399,
            value: "生命上限",
            size: 18,
            color: "black",
            align: "center"
        })
        this.baseMapName[5] = new Control_Label({
            x: 485,
            y: 399,
            value: "能量上限",
            size: 18,
            color: "black",
            align: "center"
        })
        this.addChild(this.baseMapName[0])
        this.addChild(this.baseMapName[1])
        this.addChild(this.baseMapName[2])
        this.addChild(this.baseMapName[3])
        this.addChild(this.baseMapName[4])
        this.addChild(this.baseMapName[5])
    }

    createAgiBar() {
        this.agiBar = {}

        this.agiBar.background = new Control_Image({x: 300, y: 474, src: 'menu_equipment_special_background'})
        this.addChild(this.agiBar.background)

        this.agiBar.progress = new Sprite(new Bitmap(269, 22))
        this.agiBar.progress.x = 301
        this.agiBar.progress.y = 475
        this.agiBar.progress.bitmap.fillAll(this.specialValueColor)
        this.addChild(this.agiBar.progress)

        this.agiBar.progress.mask = new Control_Image({x: 301, y: 475, src: 'menu_equipment_special_mask'})
        this.addChild(this.agiBar.progress.mask)
    }

    createLukBar() {
        this.lukBar = {}

        this.lukBar.background = new Control_Image({x: 300, y: 509, src: 'menu_equipment_special_background'})
        this.addChild(this.lukBar.background)

        this.lukBar.progress = new Sprite(new Bitmap(269, 22))
        this.lukBar.progress.x = 301
        this.lukBar.progress.y = 509
        this.lukBar.progress.bitmap.fillAll(this.specialValueColor)
        this.addChild(this.lukBar.progress)

        this.lukBar.progress.mask = new Control_Image({x: 301, y: 509, src: 'menu_equipment_special_mask'})
        this.addChild(this.lukBar.progress.mask)
    }

    createIcon() {
        this.iconAgiAdd = new Control_Image({x: 578, y: 475, src: 'menu_equipment_special_add', visible: false})
        this.addChild(this.iconAgiAdd)
        this.iconAgiReduce = new Control_Image({x: 578, y: 481, src: 'menu_equipment_special_reduce', visible: false})
        this.addChild(this.iconAgiReduce)

        this.iconLukAdd = new Control_Image({x: 578, y: 510, src: 'menu_equipment_special_add', visible: false})
        this.addChild(this.iconLukAdd)
        this.iconLukReduce = new Control_Image({x: 578, y: 516, src: 'menu_equipment_special_reduce', visible: false})
        this.addChild(this.iconLukReduce)
    }

    createPattern() {
        this.specialPattern = new Control_Image({x: 251, y: 474, src: 'menu_equipment_special_pattern'})
        this.addChild(this.specialPattern)
    }

    getMaxBaseValueByIndex(index) {
        return this.maxBaseValues[index]
    }

    getBaseValueByIndex(index) {
        switch (index) {
            case 0:
                return this.getSelectingPlayerCharacter().def
            case 1:
                return this.getSelectingPlayerCharacter().atk
            case 2:
                return this.getSelectingPlayerCharacter().mat
            case 3:
                return this.getSelectingPlayerCharacter().mdf
            case 4:
                return this.getSelectingPlayerCharacter().mhp
            case 5:
                return this.getSelectingPlayerCharacter().mmp
        }
    }

    getFakeBaseValueByIndex(index) {
        switch (index) {
            case 0:
                return this.fakeActor.def
            case 1:
                return this.fakeActor.atk
            case 2:
                return this.fakeActor.mat
            case 3:
                return this.fakeActor.mdf
            case 4:
                return this.fakeActor.mhp
            case 5:
                return this.fakeActor.mmp
        }
    }

    refresh() {
        this.refreshRaderMap()
        this.refreshAgiBar()
        this.refreshLukBar()
    }

    refreshRaderMap() {
        this.baseMap.clear()

        /**
         * @type {CanvasRenderingContext2D}
         */
        let ctx = this.baseMap.context
        ctx.beginPath()
        ctx.strokeStyle = this.baseLineColor
        ctx.lineWidth = this.raderMapLineWidth
        let beginX, beginY
        let maxIndex = 5
        for (let i = 0; i <= maxIndex; i++) {
            let maxValue = this.getMaxBaseValueByIndex(i)
            let value = this.getBaseValueByIndex(i)
            let changeStatus = 0; // 0: 不变, 1: 增加, 2: 减少
            let fakeValue
            if (this.fakeActor != null) {
                fakeValue = this.getFakeBaseValueByIndex(i)
                if (fakeValue > value) {
                    changeStatus = 1
                }
                else if (fakeValue < value) {
                    changeStatus = 2
                }
                value = fakeValue; // 不需要显示和记录原来的值
            }

            this.baseMapText[i].changeText(value)
            this.baseMapText[i].changeColorByIncreaseStatus(changeStatus)
            this.baseMapName[i].changeColorByIncreaseStatus(changeStatus)
            let rate = value / maxValue
            let rateValue = rate * this.mapRadius
            if (rate > 1) {
                console.error("refreshRaderMapshould not greater than 1. index: " + i + " value: " + value + ", maxValue: " + maxValue)
            }

            let radian = Math.PI * 2 * (i / 6)
            let x = rateValue * Math.cos(radian) + this.mapRadius
            let y = rateValue * Math.sin(radian) * -1 + this.mapRadius; // -1: in rpg maker mv, bottom means +y, so here we need a reverse.
            if (i == 0) {
                ctx.moveTo(x, y)
                beginX = x
                beginY = y
            }
            else {
                ctx.lineTo(x, y)
            }

            if (i == maxIndex) {
                ctx.lineTo(beginX, beginY)
            }
        }
        ctx.stroke()
        ctx.restore()
        this.baseMap._setDirty()
    }

    refreshAgiBar() {
        let w, h, rate, changeStatus = 0, extraRate = 0
        w = this.agiBar.progress.bitmap.width
        h = this.agiBar.progress.bitmap.height

        rate = this.getSelectingPlayerCharacter().agi / this.agiMax
        if (this.fakeActor != null) {
            let fakeRate = this.fakeActor.agi / this.agiMax
            if (fakeRate > rate) {
                changeStatus = 1
            }
            else if (fakeRate < rate) {
                changeStatus = 2
            }
            extraRate = fakeRate - rate
        }

        switch (changeStatus) {
            case 0:
            {
                this.agiBar.progress.bitmap.clear()
                this.agiBar.progress.bitmap.fillRect(0, 0, w * rate, h, this.specialValueColor)
                this.iconAgiAdd.hide()
                this.iconAgiReduce.hide()
                break
            }
            case 1:
            {
                this.agiBar.progress.bitmap.clear()
                this.agiBar.progress.bitmap.fillRect(0, 0, w * rate, h, this.specialValueColor)
                this.agiBar.progress.bitmap.fillRect(w * rate, 0, w * extraRate, h, this.growLineColor)
                this.iconAgiAdd.show()
                this.iconAgiReduce.hide()
                break
            }
            case 2:
            {
                this.agiBar.progress.bitmap.clear()
                this.agiBar.progress.bitmap.fillRect(0, 0, w * rate, h, this.specialValueColor)
                this.agiBar.progress.bitmap.fillRect(w * rate, 0, w * extraRate, h, this.reduceLineColor)
                this.iconAgiAdd.hide()
                this.iconAgiReduce.show()
                break
            }
        }
    }

    refreshLukBar() {
        let w, h, rate, changeStatus = 0, extraRate = 0
        w = this.lukBar.progress.bitmap.width
        h = this.lukBar.progress.bitmap.height

        rate = this.getSelectingPlayerCharacter().luk / this.lukMax
        if (this.fakeActor != null) {
            let fakeRate = this.fakeActor.luk / this.lukMax
            if (fakeRate > rate) {
                changeStatus = 1
            }
            else if (fakeRate < rate) {
                changeStatus = 2
            }
            extraRate = fakeRate - rate
        }

        switch (changeStatus) {
            case 0:
            {
                this.lukBar.progress.bitmap.clear()
                this.lukBar.progress.bitmap.fillRect(0, 0, w * rate, h, this.specialValueColor)
                this.iconLukAdd.hide()
                this.iconLukReduce.hide()
                break
            }
            case 1:
            {
                this.lukBar.progress.bitmap.clear()
                this.lukBar.progress.bitmap.fillRect(0, 0, w * rate, h, this.specialValueColor)
                this.lukBar.progress.bitmap.fillRect(w * rate, 0, w * extraRate, h, this.growLineColor)
                this.iconLukAdd.show()
                this.iconLukReduce.hide()
                break
            }
            case 2:
            {
                this.lukBar.progress.bitmap.clear()
                this.lukBar.progress.bitmap.fillRect(0, 0, w * rate, h, this.specialValueColor)
                this.lukBar.progress.bitmap.fillRect(w * rate, 0, w * extraRate, h, this.reduceLineColor)
                this.iconLukAdd.hide()
                this.iconLukReduce.show()
                break
            }
        }
    }

    preview(equipmentData) {
        console.log('preview: ', equipmentData)
        if (equipmentData == null) {
            this.fakeActor = null
        }
        else {
            let slotId = equipmentData.etypeId - 1

            this.fakeActor = JsonEx.makeDeepCopy(this.getSelectingPlayerCharacter())
            this.fakeActor.forceChangeEquip(slotId, equipmentData)
        }
        this.refresh()
    }

    stopPreview() {
        this.fakeActor = null
        this.refresh()
    }

    previewBest() {
        console.log('preview best')
        this.fakeActor = JsonEx.makeDeepCopy(this.getSelectingPlayerCharacter())
        this.fakeActor.optimizeEquipmentsWithoutTrade()
        this.refresh()
    }

    previewUnloadAll() {
        console.log('preview unload all')
        this.fakeActor = JsonEx.makeDeepCopy(this.getSelectingPlayerCharacter())
        this.fakeActor.clearEquipmentsWithoutTrade()
        this.refresh()
    }
}
class Control_CharacterEquipmentWarehouseList extends Control_Container {
    initialize(options) {
        super.initialize(options)
        this.filterHandlerOption('onWearEquipment')
        this.filterHandlerOption('onHoverEquipment')
        this.filterHandlerOption('onUnhoverEquipment')
        this.initializeMembers()
        this.createComponents()
    }

    initializeMembers() {
        this.etypeId = 0; // 1 ~ 6, equipment type, 0: init when "open"
        this.currentItemsData = []
        this.visibleItemCount = 13
        // @dynamic currentItemCount

        this.listBoxX = 11
        this.listBoxY = 50
        this.listBoxWidth = 371; // @helper
        this.listBoxHeight = 533; // @helper
        this.listBoxSpacing = 41

        this.listItemWidth = this.listBoxWidth
        this.listItemHeight = this.listBoxHeight / this.visibleItemCount

        this.scrollBarX = 384
        // @dynamic: scrollBarY
        // @dynamic: scrollBarHeight

        this.scrollBoxX = 384
        this.scrollBoxY = 52
        this.scrollBoxWidth = 12
        this.scrollBoxHeight = this.listBoxHeight

        this.popupPadding = 5
        // @dynamic: popupOffsetY

        this.popupCancelRectX = this.listBoxX - this.popupPadding
        this.popupCancelRectY = this.listBoxY - this.popupPadding
        this.popupCancelRectWidth = this.listBoxWidth + this.popupPadding * 2
        this.popupCancelRectHeight = this.listBoxHeight + this.popupPadding * 2

        this.resetScrollRange()
    }

    /**
     * @param id id of hovering item.
     */
    getPopupOffsetY(id) {
        return id < 10 ? 50 : -175
    }

    getScrollBarHeight() {
        return this.scrollBoxHeight * Math.min(1, this.visibleItemCount / this.getCurrentItemCount())
    }

    createComponents() {
        this.createBackground()
        this.createListBox()

        this.createPopup()
        this.createPopupCancelRect()

        this.createScrollBar()
        this.createScrollBox()
        this.resetScrollRange()
    }

    createBackground() {
        this.background = new Control_Image({
            src: 'menu_warehouse_background',
            x: 0,
            y: 0
        })
        this.addChild(this.background)
    }

    createListBox() {
        this.listBox = new Control_VerticalLayoutGroup({
            x: this.listBoxX,
            y: this.listBoxY,
            spacing: this.listBoxSpacing
        })
        for (var i = 0; i < this.visibleItemCount; i++) {
            var item = new Control_CharacterEquipmentWarehouseListItem({
                width: this.listItemWidth,
                height: this.listItemHeight,
                onMouseEnter: this.showPopup.bind(this),
                onClick: this.onClickWearEquipment.bind(this)
            })
            item.id = i
            this.listBox.addChild(item)
        }
        this.addChild(this.listBox)
    }

    createPopup() {
        this.popup = new Control_EquipmentPopup()
        this.addChild(this.popup)
    }

    createPopupCancelRect() {
        this.popupCancelRect = new Control_InteractiveRect({
            x: this.popupCancelRectX,
            y: this.popupCancelRectY,
            width: this.popupCancelRectWidth,
            height: this.popupCancelRectHeight,
            onMouseLeave: this.hidePopup.bind(this)
        })
        this.addChild(this.popupCancelRect)
    }

    createScrollBar() {
        this.scrollBar = new Control_ScrollBar({
            x: this.scrollBarX,
            y: this.getScrollBarY(),
            height: this.getScrollBarHeight()
        })
        this.addChild(this.scrollBar)
    }

    createScrollBox() {
        this.scrollBox = new Control_InteractiveRect({
            x: this.scrollBoxX,
            y: this.scrollBoxY,
            width: this.scrollBoxWidth,
            height: this.scrollBoxHeight,
            onMouseDragging: this.onMouseDraggingScrollBar.bind(this)
        })
        this.addChild(this.scrollBox)
    }

    onMouseDraggingScrollBar(control) {
        this.scrollRange = control.getCellListRangeByTouchPositionYInControl(
            this.visibleItemCount,
            this.getCurrentItemCount()
        )
        this.refresh()
    }

    resetScrollRange() {
        this.scrollRange = {
            start: 0,
            end: this.visibleItemCount - 1
        }
    }

    /**
     * @param control List Item
     */
    showPopup(control) {
        if (this.scrollBox.isMouseDragging()) return

        this._selectingItemData = control.itemData
        this.callHandler('onHoverEquipment')
        if (control.itemData != null) {
            this.popup.changeItemData(control.itemData)
            this.popup.globalY = control.globalY + this.getPopupOffsetY(control.id)
            this.popup.show()
        }
        else {
            this.popup.hide()
        }
    }

    hidePopup() {
        this.popup.hide()
        this.callHandler('onUnhoverEquipment')
    }

    onClickWearEquipment(warehouseItem) {
        this.callHandler('onWearEquipment')
    }

    getSelectingItemData() {
        return this._selectingItemData
    }

    getScrollBarY() {
        return this.scrollBoxY + (this.listBoxHeight * (this.scrollRange.start / this.getCurrentItemCount()))
    }

    refreshScrollBarY() {
        this.scrollBar.y = this.getScrollBarY()
    }

    refreshScrollBarHeight() {
        this.scrollBar.changeHeight(this.getScrollBarHeight())
    }

    updateCurrentItemsData() {
        this.currentItemsData = $gameParty.equipItems().filter(data => this.getSelectingPlayerCharacter().canEquip(data) && data.etypeId == this.etypeId)
    }

    getCurrentItemCount() {
        return this.currentItemsData.length
    }

    refresh() {
        this.refreshScrollBarY()
        this.refreshScrollBarHeight()

        for (let i = 0; i < this.listBox.children.length; i++) {
            let equipData = this.currentItemsData[this.scrollRange.start + i]
            /**
             * @type {Control_CharacterEquipmentWarehouseListItem}
             */
            let item = this.listBox.children[i]
            item.changeItemData(equipData)
        }
    }

    open(etypeId) {
        this.etypeId = etypeId
        this.resetScrollRange()
        this.updateCurrentItemsData()
        this.refresh()
        this.activate()
        this.show()
    }

    close() {
        this.deactivate()
        this.hide()
        this.popup.hide(); // prevent popup show default at begin when next open listBox
    }
}
class Control_SelectCharacterPopup extends Control_Container {
    initialize(options) {
        super.initialize(options)
        this.filterHandlerOption('onClick')
        this.createBackground()
        this.createCharacterHeads()
        this.createCharacterButtons()
    }

    createBackground() {
        this.background = new Control_Image({
            src: 'menu_item_select_head'
        })
        this.addChild(this.background)
    }

    createCharacterHeads() {
        this.heads = {}
        for (let i = 0; i < GetPlayerCharacterCount(); i++) {
            this.heads[i] = new Control_CharacterHeadImage({
                x: 20 + i * 83,
                y: 30,
                src: GetPlayerCharacterHead(i)
            })
            this.addChild(this.heads[i])
        }
    }

    createCharacterButtons() {
        this.headButtons = {}
        for (let i = 0; i < GetPlayerCharacterCount(); i++) {
            this.headButtons[i] = new Control_Button({
                x: 11 + 20 + i * 83,
                y: 11 + 30, // 11: button padding
                width: 66,
                height: 66,
                onClick: this.options.onClick
            })
            this.headButtons[i].id = i
            this.addChild(this.headButtons[i])
        }
    }
}
class Control_Button extends Control_Container {
    initialize(options) {
        super.initialize(options)

        this.filterIntegerOption('width', 0) // button width
        this.filterIntegerOption('height', 0) // button height
        this.filterHandlerOption('onClick')
        this.filterHandlerOption('onClose') // status mode only
        this.filterHandlerOption('onOpen') // status mode only
        this.filterHandlerOption('onMouseEnter')
        this.filterBooleanOption('alwaysVisible', false) // for debug purpose
        this.filterBooleanOption('useStatus', false) // use status mode, like switcher
        this.filterBooleanOption('startStatus', false) // status mode only

        this.width = this.options.width
        this.height = this.options.height

        this.createStatusCover()
        this.createHoverCover()
        this.createInteractiveRect()
    }

    createStatusCover() {
        this.statusCover = new Control_ColorBlock({
            width: this.options.width,
            height: this.options.height,
            opacity: 100,
            visible: this.options.useStatus ? this.options.startStatus : false
        })
        this.addChild(this.statusCover)
    }

    createHoverCover() {
        this.hoverCover = new Control_ColorBlock({
            width: this.options.width,
            height: this.options.height,
            opacity: 50,
            visible: this.options.alwaysVisible
        })
        this.addChild(this.hoverCover)
    }

    createInteractiveRect() {
        this.interactiveRect = new Control_InteractiveRect({
            width: this.options.width,
            height: this.options.height,
            onMouseEnter: this.onMouseEnter.bind(this),
            onMouseLeave: this.onMouseLeave.bind(this),
            onMouseClick: this.onClick.bind(this)
        })
        this.addChild(this.interactiveRect)
    }

    onMouseEnter() {
        if (this.options.alwaysVisible)
            return

        this.hoverCover.show()

        if (!this.options.useStatus)
            this.callHandler('onMouseEnter', this)
    }

    onMouseLeave() {
        if (this.options.alwaysVisible) return
        this.hoverCover.hide()
    }

    onClick() {
        if (!this.options.useStatus) {
            this.callHandler('onClick', this)
        }
        else {
            this.callHandler(this.status ? 'onClose' : 'onOpen')
            this.changeStatus(!this.status)
        }
    }

    changeWidth(w) {
        this.options.width = w

        this.width = this.options.width
        this.statusCover.changeWidth(this.options.width)
        this.hoverCover.changeWidth(this.options.width)
        this.interactiveRect.changeWidth(this.options.width)
    }

    changeStatus(status) {
        if (!this.options.useStatus) {
            console.error("YOU ARE NOT USING STATUS MODE!", this)
        }
        this.status = status
        if (status)
            this.statusCover.show()
        else
            this.statusCover.hide()
    }
}
class Control_CharacterEquipmentListItem extends Control_Button {
    initialize(options) {
        super.initialize(options)

        this.filterStringOption('label', ''); // use '' to mark ware house item.

        this.createLabel()
        this.createText()
    }

    createLabel() {
        this.label = new Control_Text({
            x: 10,
            y: 11,
            color: 'black',
            size: 20,
            value: this.options.label
        })
        this.addChild(this.label)
    }

    createText() {
        this.text = new Control_Text({
            x: this.options.label == '' ? 10 : 62,
            y: 11,
            color: 'black',
            size: 20,
            value: this.options.value
        })
        this.addChild(this.text)
    }

    changeItemData(itemData) {
        this.itemData = itemData
        this.refresh()
    }

    refresh() {
        if (this.itemData == null) {
            this.text.changeText('')
        }
        else {
            this.text.changeText(this.itemData.name)
        }
    }
}
class Control_CharacterEquipmentWarehouseListItem extends Control_Button {
    initialize(options) {
        super.initialize(options)

        this.createText()
        this.createNumber()
    }

    createText() {
        this.text = new Control_Text({
            x: this.options.label == '' ? 10 : 62,
            y: 11,
            color: 'black',
            size: 20,
            value: this.options.value
        })
        this.addChild(this.text)
    }

    createNumber() {
        this.number = new Control_Text({
            x: 340,
            y: 11,
            color: 'black',
            size: 20,
            value: ''
        })
        this.addChild(this.number)
    }

    changeItemData(itemData) {
        this.itemData = itemData
        this.refresh()
    }

    refresh() {
        if (this.itemData == null) {
            this.text.changeText('')
            this.number.changeText('')
        }
        else {
            let itemNumber = $gameParty.numItems(this.itemData)
            this.text.changeText(this.itemData.name)
            this.number.changeText('x' + itemNumber)
        }
    }
}
class Control_PartyItemListItem extends Control_Button {
    initialize(options) {
        super.initialize(options)

        this.createItemNameText()
        this.createItemCountText()
    }

    createItemNameText() {
        this.itemName = new Control_Text({
            x: 5,
            y: 8,
            color: 'black'
        })
        this.addChild(this.itemName)
    }

    createItemCountText() {
        this.itemCount = new Control_Text({
            x: 320,
            y: 8,
            color: 'black'
        })
        this.addChild(this.itemCount)
    }

    changeItemData(itemData) {
        this.itemData = itemData
        this.refresh()
    }

    refresh() {
        if (this.itemData == null) {
            this.itemName.changeText('')
            this.itemCount.changeText('')
        }
        else {
            this.itemName.changeText(this.itemData.name)
            this.itemCount.changeText('x' + GetPlayerSpecificItemCount(this.itemData))
        }
    }
}
class Control_CharacterHead extends Control_Container {
    initialize(options) {
        super.initialize(options)

        this.filterIntegerOption('width', 0)
        this.filterIntegerOption('height', 0)
        this.filterStringOption('background', '')
        this.filterStringOption('mask', '')
        this.filterStringOption('head', '')
        this.filterHandlerOption('onMouseClick')

        this.createBackground()
        this.createMask()
        this.createHead()
        this.createInteractiveRect()
    }

    createBackground() {
        this.background = new Control_Image({
            src: this.options.background
        })
        this.addChild(this.background)
    }

    createMask() {
        // do not use "mask", because mask has special usage in rmmv.
        this.maskImage = new Control_Image({
            src: this.options.mask
        })
        this.maskImage.hide()
        this.addChild(this.maskImage)
    }

    createHead() {
        this.head = new Control_CharacterHeadImage({
            src: this.options.head
        })
        this.addChild(this.head)
    }

    createInteractiveRect() {
        this.interactiveRect = new Control_InteractiveRect({
            'width': this.options.width,
            'height': this.options.height,
            'onMouseClick': this.options.onMouseClick,
            'onMouseEnter': this.showMask.bind(this),
            'onMouseLeave': this.hideMask.bind(this)
        })
        this.addChild(this.interactiveRect)
    }

    showMask() {
        this.maskImage.show()
    }

    hideMask() {
        this.maskImage.hide()
    }

    show() {
        super.show()
        this.background.show()
        this.head.show()
        this.interactiveRect.activate()
        this.activate()
    }

    hide() {
        super.hide()
        this.background.hide()
        this.head.hide()
        this.maskImage.hide() // do not show on activate is due to when 'onPlayerClick -> Hide' fired, need instant hide mask without concern whether mouse in head rect.
        this.interactiveRect.deactivate()
        this.deactivate()
    }

    changeHead(head) {
        this.options.head = head
        this.head.changeHead(head)
    }
}
class Control_PartyItemList extends Control_Container {
    initialize(options) {
        super.initialize(options)
        this.filterStringOption('background', '')
        this.filterIntegerOption('itemListX', 15)
        this.filterIntegerOption('itemListY', 54)
        this.filterIntegerOption('itemWidth', 370)
        this.filterIntegerOption('itemListHeight', 287)
        this.filterHandlerOption('onEnterItem')
        this.filterHandlerOption('onGoToEquipment')

        this.initializeMembers()

        this.createBackground()
        this.createItemList()
        this.createToggleItems()
        this.createScrollBar()
        this.createScrollBarInteractiveRect()
        this.createPopup()

        this.gotoCommons()
    }

    initializeMembers() {
        this.lastClickedToggleItem = null
        this.itemRange = {start: 0, end: 6}
        this.itemsData = []
        this.selectingItemData = null
    }

    resetItemRange() {
        this.itemRange = {start: 0, end: 6}
    }

    onMouseTouchPressingScrollBar(control) {
        if (this.isSelectingUser()) return

        this.itemRange = control.getCellListRangeByTouchPositionYInControl(
            this.getVisibleItemCount(),
            this.getCurrentItemCount()
        )
        this.refreshScroll()
    }

    onEnterItem(control) {
        if (this.isSelectingUser()) return

        this.callHandler('onEnterItem', control)
    }

    onClickCharacter(control) {
        this.popup.deactivate()
        this.popup.hide()

        let character = GetPlayerCharacter(control.id)
        let item = this.selectingItemData
        character.useItem(item)
        this.refreshStatus()
    }

    onClickItem(control) {
        if (this.isSelectingUser() || control.itemData == null) return

        this.selectingItemData = control.itemData
        this.popup.y = control.y + this.options.itemListHeight / 7 + 41
        this.popup.activate()
        this.popup.show()
    }

    createBackground() {
        this.background = new Control_Image({
            src: this.options.background
        })
        this.addChild(this.background)
    }

    createItemList() {
        this.itemList = new Control_VerticalLayoutGroup({
            x: this.options.itemListX,
            y: this.options.itemListY,
            spacing: 41
        })
        this.appendItems()
        this.addChild(this.itemList)
    }

    appendItems() {
        for (let i = 0; i < 7; i++) {
            let item = new Control_PartyItemListItem({
                width: this.options.itemWidth,
                height: this.options.itemListHeight / 7,
                onMouseEnter: this.onEnterItem.bind(this),
                onClick: this.onClickItem.bind(this)
            })
            item.id = i
            this.itemList.addChild(item)
        }
    }

    createToggleItems() {
        this.toggleItems = {}
        this.toggleItems.common = new Control_Button({
            x: 15,
            y: 14,
            width: 383,
            height: 36,
            onClick: this.gotoCommons.bind(this)
        })
        this.toggleItems.special = new Control_Button({
            x: 15,
            y: 347,
            width: 383,
            height: 34,
            onClick: this.gotoSpecials.bind(this)
        })
        this.toggleItems.equipment = new Control_Button({
            x: 15,
            y: 387,
            width: 383,
            height: 33,
            onClick: this.gotoEquipments.bind(this)
        })
        this.addChild(this.toggleItems.common)
        this.addChild(this.toggleItems.special)
        this.addChild(this.toggleItems.equipment)
    }

    createScrollBar() {
        this.scrollBar = new Control_ScrollBar({
            x: this.options.itemListX + this.options.itemWidth + 1,
            y: this.options.itemListY,
            height: this.getCurrentScrollBarHeight()
        })
        this.addChild(this.scrollBar)
    }

    createScrollBarInteractiveRect() {
        this.scrollBarInteractiveRect = new Control_InteractiveRect({
            x: this.options.itemListX + this.options.itemWidth,
            y: this.options.itemListY,
            width: 12,
            height: this.options.itemListHeight,
            onMouseTouchPressing: this.onMouseTouchPressingScrollBar.bind(this)
        })
        this.addChild(this.scrollBarInteractiveRect)
    }

    createPopup() {
        this.popup = new Control_SelectCharacterPopup({
            x: 10,
            visible: false,
            active: false,
            onClick: this.onClickCharacter.bind(this)
        })
        this.addChild(this.popup)
    }

    getCurrentScrollBarHeight() {
        return this.options.itemListHeight * Math.min(1, (
                this.getVisibleItemCount() / this.getCurrentItemCount()
            ))
    }

    getCurrentScrollBarY() {
        return this.getFixedItemListY() + (this.options.itemListHeight * (this.itemRange.start / this.getCurrentItemCount()))
    }

    getFixedItemListY() {
        let fix = 0
        switch (this.status) {
            case 'Common':
                fix = 0
                break
            case 'Special':
                fix = 40
                break
        }
        return this.options.itemListY + fix
    }

    getVisibleItemCount() {
        return 7
    }

    getCurrentItemCount() {
        return this.itemsData.length
    }

    isSelectingUser() {
        return this.popup.isActive()
    }

    gotoCommons() {
        if (this.isSelectingUser()) return

        this.status = 'Common'
        this.refreshStatus()
        this.background.changeSource('Item_Commons')
        this.switchToggle(this.toggleItems.common)
        this.itemList.y = this.getFixedItemListY()
        this.scrollBarInteractiveRect.y = this.getFixedItemListY()
        this.toggleItems.special.y = 347
        this.toggleItems.equipment.y = 387
        this.resetItemRange()
        this.refreshScroll()
    }

    gotoSpecials() {
        if (this.isSelectingUser()) return

        this.status = 'Special'
        this.refreshStatus()
        this.background.changeSource('Item_Specials')
        this.switchToggle(this.toggleItems.special)
        this.itemList.y = this.getFixedItemListY()
        this.scrollBarInteractiveRect.y = this.getFixedItemListY()
        this.toggleItems.equipment.y = 387
        this.resetItemRange()
        this.refreshScroll()
    }

    gotoEquipments() {
        if (this.isSelectingUser()) return

        // this.status = 'Equipment'
        // this.refreshStatus()
        // this.background.changeSource('Item_Equipments')
        // this.switchToggle(this.toggleItems.equipment)
        // this.itemList.y = this.options.itemListY + 81
        // this.toggleItems.special.y = 52
        // this.refreshScroll()
        this.callHandler('onGoToEquipment')
    }

    switchToggle(nextToggleItem) {
        if (this.lastClickedToggleItem != null) {
            this.lastClickedToggleItem.active = true
            this.lastClickedToggleItem.visible = true
        }
        nextToggleItem.active = false
        nextToggleItem.visible = false

        this.lastClickedToggleItem = nextToggleItem
    }

    refreshScroll() {
        this.scrollBar.y = this.getCurrentScrollBarY()
        this.scrollBar.changeHeight(this.getCurrentScrollBarHeight())
        this.refreshItemsData()
    }

    refreshStatus() {
        switch (this.status) {
            case 'Common':
                this.itemsData = GetPlayerNormalItems()
                break
            case 'Special':
                this.itemsData = GetPlayerSpecialItems()
                break
            case 'Equipment':
                this.itemsData = GetPlayerEquipmentItems()
                break
        }
        this.refreshItemsData()
    }

    refreshItemsData() {
        let children = this.itemList.children
        for (let i = 0; i < children.length; i++) {
            /**
             * @type {Control_PartyItemListItem}
             */
            let child = children[i]
            let itemData
            if (this.itemRange == null) itemData = null
            else itemData = this.itemsData[this.itemRange.start + i]
            child.changeItemData(itemData)
        }
    }
}
class Control_Rect extends Control_Base {
    initialize(options) {
        super.initialize(options)

        this.filterIntegerOption('x', 0)
        this.filterIntegerOption('y', 0)
        this.filterIntegerOption('width', 1)
        this.filterIntegerOption('height', 1)

        this.x = this.options.x
        this.y = this.options.y
        this.width = this.options.width
        this.height = this.options.height
    }

    /**
     * @param {number} x
     * @return {number}
     */
    canvasToLocalX(x) {
        let node = this
        while (node) {
            x -= node.x
            node = node.parent
        }
        return x
    }

    /**
     * @param {number} y
     * @return {number}
     */
    canvasToLocalY(y) {
        let node = this
        while (node) {
            y -= node.y
            node = node.parent
        }
        return y
    }

    /**
     * @param {number} canvasX
     * @param {number} canvasY
     * @return {boolean}
     */
    isCanvasPositionInControl(canvasX, canvasY) {
        let localX = this.canvasToLocalX(canvasX)
        let localY = this.canvasToLocalY(canvasY)
        return localX >= 0 && localY >= 0 && localX < this.width && localY < this.height
    }

    /**
     * @return {boolean}
     */
    isTouchPositionInControl() {
        return this.isCanvasPositionInControl(TouchInput.x, TouchInput.y)
    }

    isPagePositionInControl(pageX, pageY) {
        return this.isCanvasPositionInControl(Graphics.pageToCanvasX(pageX), Graphics.pageToCanvasY(pageY))
    }

    isMouseEventPositionInControl(event) {
        return this.isPagePositionInControl(event.pageX, event.pageY)
    }

    getCanvasPositionXInControlPercentage(canvasX) {
        let localX = this.canvasToLocalX(canvasX)
        return localX / this.width
    }

    getCanvasPositionYInControlPercentage(canvasY) {
        let localY = this.canvasToLocalY(canvasY)
        return localY / this.height
    }

    getTouchXInControlPercentage() {
        return this.getCanvasPositionXInControlPercentage(TouchInput.x)
    }

    getTouchYInControlPercentage() {
        return this.getCanvasPositionYInControlPercentage(TouchInput.y)
    }

    getPagePositionXInControlPercentage(pageX) {
        return this.getCanvasPositionXInControlPercentage(Graphics.pageToCanvasX(pageX))
    }

    getPagePositionYInControlPercentage(pageY) {
        return this.getCanvasPositionYInControlPercentage(Graphics.pageToCanvasY(pageY))
    }

    getMouseEventPositionXInControlPercentage(event) {
        return this.getPagePositionXInControlPercentage(event.pageX)
    }

    getMouseEventPositionYInControlPercentage(event) {
        return this.getPagePositionYInControlPercentage(event.pageY)
    }

    getCellListRange(pos, show, total) {
        pos = Math.ceil(pos)
        let offset = Math.ceil(show / 2)

        let start = pos - offset
        let startMin = 0
        let startMax = total - show
        start = Math.max(0, Math.min(startMax, Math.max(start, startMin)))

        let end = start + show - 1

        //console.log("pos %1 offset %2 [%3, %4] %5/%6".format(pos, offset, start, end, show, total))
        return {start: start, end: end}
    }

    getCellListRangeByCanvasPositionYInControl(canvasY, show, total) {
        let pos = this.getCanvasPositionYInControlPercentage(canvasY) * total
        return this.getCellListRange(pos, show, total)
    }

    getCellListRangeByTouchPositionYInControl(show, total) {
        let canvasY = TouchInput.y
        return this.getCellListRangeByCanvasPositionYInControl(canvasY, show, total)
    }
}
class Control_Mask extends Control_Rect {
    initialize(options) {
        Control_Rect.prototype.initialize.call(this, options)

        this.bitmap = new Bitmap(this.options.width, this.options.height)
        this.bitmap.fillAll('white')
    }

    /**
     * don't resize mask by direct set width and height, because mask work base on its bitmap (grayscale map).
     * @param {int} width
     * @param {int} height
     */
    resize(width, height) {
        this.options.width = width
        this.options.height = height

        this.width = this.options.width
        this.height = this.options.height
        this.bitmap.resize(this.options.width, this.options.height)
        this.bitmap.fillAll('white')
    }

}
class Control_InteractiveRect extends Control_Rect {
    initialize(options) {
        super.initialize(options)

        this.filterHandlerOption('onMouseHovering')
        this.filterHandlerOption('onMouseUnhovering')
        this.filterHandlerOption('onMousePressing')
        this.filterHandlerOption('onMouseTouchPressing')
        this.filterHandlerOption('onMouseClickStart')
        this.filterHandlerOption('onMouseClick')
        this.filterHandlerOption('onMouseClickEnd')
        this.filterHandlerOption('onMouseEnter')
        this.filterHandlerOption('onMouseMove')
        this.filterHandlerOption('onMouseLeave')
        this.filterHandlerOption('onMouseDragStart')
        this.filterHandlerOption('onMouseDragging')
        this.filterHandlerOption('onMouseDragEnd')
        this.filterHandlerOption('onMouseScroll')

        this._clicking = false
        this._mouseHover = false
        this._dragging = false
        document.addEventListener('mousemove', this.onMouseMove.bind(this))
        window.addEventListener('mousewheel', this.onMouseWheel.bind(this)) // document is invalid here.
    }

    update() {
        super.update()
        this.processMouseHovering()
        this.processMouseClick()
        this.processMousePressing()
        this.processMouseDragging()
    }

    processMouseHovering() {
        if (this.isActive()) {
            this.isMouseHover() ? this.callHandler('onMouseHovering') : this.callHandler('onMouseUnhovering')
        }
    }

    processMouseClick() {
        if (this.isActive()) {
            if (TouchInput.isTriggered() && this.isTouchPositionInControl()) {
                this._clicking = true
                this.callHandler('onMouseClickStart')
            }
            if (this._clicking) {
                if (TouchInput.isReleased() || !this.isTouchPositionInControl()) {
                    this._clicking = false
                    this.callHandler('onMouseClickEnd')
                    if (TouchInput.isReleased()) {
                        this.callHandler('onMouseClick')
                    }
                }
            }
        } else {
            this._clicking = false
        }
    }

    processMousePressing() {
        if (this.isActive() && this.isMousePressing()) {
            this.callHandler('onMousePressing')
            if (this.isTouchPositionInControl()) {
                this.callHandler('onMouseTouchPressing')
            }
        }
    }

    processMouseDragging() {
        if (this.isActive()) {
            if (TouchInput.isTriggered() && this.isTouchPositionInControl()) {
                this._dragging = true
                this.callHandler('onMouseDragStart')
            }
            if (this._dragging) {
                if (TouchInput.isReleased()) {
                    this._dragging = false
                    this.callHandler('onMouseDragEnd')
                }
                else {
                    this.callHandler('onMouseDragging')
                }
            }
        }
    }

    onMouseMove(e) {
        if (this.isActive()) {
            if (this.isMouseEventPositionInControl(e)) {
                if (this._mouseHover === false) {
                    this._mouseHover = true
                    this.callHandler('onMouseEnter')
                }
            } else {
                if (this._mouseHover === true) {
                    this._mouseHover = false
                    this.callHandler('onMouseLeave')
                }
            }

            if (this._mouseHover == true) {
                this.callHandler('onMouseMove')
            }
        }
    }

    onMouseWheel(e) {
        if (this.isActive() && this._mouseHover == true) {
            let forward = e.deltaY > 0
            this.callHandler('onMouseScroll', this, forward)
        }
    }

    isMouseHover() {
        return this._mouseHover
    }

    isMousePressing() {
        return this._clicking
    }

    isMouseDragging() {
        return this._dragging == true
    }

    changeWidth(w) {
        this.options.width = w
        this.width = w
    }

    changeHeight(h) {
        this.options.height = h
        this.height = h
    }

    changeSize(w, h) {
        this.changeWidth(w)
        this.changeHeight(h)
    }
}
class Control_Switcher extends Control_Container {
    get width() {
        return this.options.width
    }

    get height() {
        return this.options.height
    }

    initialize(options) {
        super.initialize(options)

        this.filterBooleanOption('preventManualClose', false)
        this.filterBooleanOption('status', false)
        this.filterIntegerOption('width', 1) // related to "interactive area"
        this.filterIntegerOption('height', 1) // related to "interactive area"
        this.filterIntegerOption('textX', 0)
        this.filterIntegerOption('textY', 0)
        this.filterIntegerOption('textSize', 24)
        this.filterStringOption('backgroundImage', '')
        this.filterStringOption('backgroundOpenImage', '')
        this.filterStringOption('value', '')
        this.filterStringOption('color', 'black')
        this.filterHandlerOption('onOpen')
        this.filterHandlerOption('onClose')

        this._status = this.options.status
        this.createComponents()
    }

    createComponents() {
        this.createBackground()
        this.createBackgroundOpen()
        this.createText()
        this.createInteractArea()
    }

    createBackground() {
        if (this.options.backgroundImage == '') return

        /**
         * background image of switcher.
         * @type {Control_Image}
         */
        this.backgroundControl = new Control_Image({
            src: this.options.backgroundImage
        })
        this.addChild(this.backgroundControl)
    }

    createBackgroundOpen() {
        if (this.options.backgroundOpenImage == '') return

        /**
         * background image of switcher.
         * @type {Control_Image}
         */
        this.backgroundOpenControl = new Control_Image({
            src: this.options.backgroundOpenImage
        })
        if (!this._status) this.backgroundOpenControl.hide()
        this.addChild(this.backgroundOpenControl)
    }

    createText() {
        /**
         * hold switcher text.
         * @type {Control_Text}
         */
        this.textControl = new Control_Text({
            x: this.options.textX,
            y: this.options.textY,
            value: this.options.value,
            size: this.options.textSize,
            color: this.options.color
        })
        this.addChild(this.textControl)
    }

    createInteractArea() {
        /**
         * detect mouse behaviours.
         * @type {Control_Rect}
         */
        this.interactArea = new Control_InteractiveRect({
            x: 0,
            y: 0,
            width: this.options.width,
            height: this.options.height
        })
        this.interactArea.addHandler('onMouseClick', this.onInteractiveRectClick.bind(this))
        this.addChild(this.interactArea)
    }

    onInteractiveRectClick() {
        if (!this._status) {
            this.open()
        }
        else if (!this.options.preventManualClose) {
            this.close()
        }
    }

    open() {
        this._status = true
        this.backgroundOpenControl.show()
        this.callHandler('onOpen')
    }

    close() {
        this._status = false
        this.backgroundOpenControl.hide()
        this.callHandler('onClose')
    }

}
class Control_VerticalSwitcherGroup extends Control_VerticalLayoutGroup {
    initialize(options) {
        super.initialize(options)
        this._lastOpenedChild = null
    }

    addChild(child) {
        super.addChild(child)
        child.addHandler('onOpen', this.onChildOpen.bind(this))
    }

    onChildOpen(child) {
        if (this._lastOpenedChild) {
            this._lastOpenedChild.close()
        }
        this._lastOpenedChild = child
    }
}
class Control_Progress extends Control_Rect {
    initialize(options) {
        super.initialize(options)

        this.filterFloatOption('value', 0.5)
        this.filterStringOption('color', 'black')

        this.bitmap = new Bitmap(this.width, this.height)
        this.changeProgress(this.options.value)
    }

    /**
     * @param {float} progress 0.0% (0.000) ~ 100.0% (1.000)
     */
    changeProgress(progress) {
        this.options.value = progress
        this.bitmap.clear()
        this.bitmap.fillRect(0, 0, this.width * this.options.value, this.height, this.options.color)
    }

    getProgress() {
        return Math.round(this.options.value * 1000) / 1000
    }
}
class Control_ColorBlock extends Control_Rect {
    initialize(options) {
        super.initialize(options)

        this.filterStringOption('color', 'white')
        this.filterIntegerOption('opacity', 155)

        this.makeBitmap()
        this.opacity = this.options.opacity
    }

    makeBitmap() {
        this.bitmap = new Bitmap(this.options.width, this.options.height)
        this.bitmap.fillAll(this.options.color)
    }

    changeSize(w, h) {
        this.options.width = w
        this.options.height = h
        this.makeBitmap()
    }

    changeTo(x, y, w, h) {
        this.x = x
        this.y = y
        this.changeSize(w, h)
    }

    changeWidth(w) {
        this.options.width = w
        this.makeBitmap()
    }
}
class Control_Icon extends Control_Base {
    get iconIndex() {
        return this.options.value
    }

    set iconIndex(value) {
        this.options.value = value
    }

    initialize(options) {
        super.initialize(options)

        this.filterIntegerOption('x', 0)
        this.filterIntegerOption('y', 0)
        this.filterIntegerOption('value', 0) // icon index
        this.filterIntegerOption('width', 32)
        this.filterIntegerOption('height', 32)

        this.x = this.options.x
        this.y = this.options.y
        this.bitmap = this.getIconSet()
        this.refreshIcon()
    }

    getIconSet() {
        return ImageManager.loadSystem('IconSet')
    }

    changeIcon(iconIndex) {
        this.iconIndex = iconIndex
        this.refreshIcon()
    }

    refreshIcon() {
        var pw = this.options.width
        var ph = this.options.height
        var sx = this.iconIndex % 16 * pw
        var sy = Math.floor(this.iconIndex / 16) * ph
        this.setFrame(sx, sy, pw, ph)
    }
}
class Control_SkillIcon extends Control_Icon {
    getIconSet() {
        return ImageManager.loadSystem('IconSet')
    }
}
class Control_BuffIcon extends Control_Icon {
    getIconSet() {
        return ImageManager.loadSystem('IconSet')
    }
}

class Layout_Base extends Control_Container {
    initialize(options) {
        super.initialize(options)
        this.filterBooleanOption('status', true)
        this.options.status ? this.open() : this.close()
    }

    open() {
        this.show()
        this.activate()
    }

    close() {
        this.hide()
        this.deactivate()
    }

    refresh() {

    }
}
class Layout_Test extends Layout_Base {
    initialize(options) {
        super.initialize(options)
        this.create([
            this.background = new Control_ColorBlock({width: Graphics.width, height: Graphics.height}),
            this.list = new Control_List()
        ])
        this.list.addChild(new Control_Button({width: 300, height: 80}))
        this.list.addChild(new Control_Button({width: 300, height: 80}))
        this.list.addChild(new Control_Button({width: 300, height: 80}))
        this.list.addChild(new Control_Button({width: 300, height: 80}))
        this.list.addChild(new Control_Button({width: 300, height: 80}))
        this.list.addChild(new Control_Button({width: 300, height: 80}))
        this.list.addChild(new Control_Button({width: 300, height: 80}))
    }
}
class Layout_MenuCommon extends Layout_Base {
    initialize(options) {
        super.initialize(options)
        this.filterHandlerOption('onOpenCharacter')
        this.filterHandlerOption('onOpenItem')
        this.filterHandlerOption('onOpenEquipment')
        this.filterHandlerOption('onOpenParty')
        this.filterHandlerOption('onOpenEntry')
        this.filterHandlerOption('onOpenOption')
        this.filterHandlerOption('onOpenArchive')
        this.create([
            this.backgroundImage = new Control_Image({src: 'menu_background'}),
            this.backgroundPatternImage = new Control_Image({src: 'menu_background_pattern'}),
            this.returnButtonImage = new Control_Image({src: 'menu_return'}),
            this.switcherGroupList = new Control_VerticalSwitcherGroup({
                x: 32, y: 98, spacing: 77, children: [
                    this.switcherCharacter = new Control_Switcher({
                        value: "人物",
                        textX: 41,
                        textY: 18,
                        textSize: 28,
                        width: 125,
                        height: 63,
                        backgroundImage: "devil_menu_tag",
                        backgroundOpenImage: "devil_menu_tag_open",
                        onOpen: this.options.onOpenCharacter,
                        preventManualClose: true
                    }),
                    this.switcherItem = new Control_Switcher({
                        value: "物品",
                        textX: 41,
                        textY: 18,
                        textSize: 28,
                        width: 125,
                        height: 63,
                        backgroundImage: "devil_menu_tag",
                        backgroundOpenImage: "devil_menu_tag_open",
                        onOpen: this.options.onOpenItem,
                        preventManualClose: true
                    }),
                    this.switcherEquipment = new Control_Switcher({
                        value: "装备",
                        textX: 41,
                        textY: 18,
                        textSize: 28,
                        width: 125,
                        height: 63,
                        backgroundImage: "devil_menu_tag",
                        backgroundOpenImage: "devil_menu_tag_open",
                        onOpen: this.options.onOpenEquipment,
                        preventManualClose: true
                    }),
                    this.switcherParty = new Control_Switcher({
                        value: "编队",
                        textX: 41,
                        textY: 18,
                        textSize: 28,
                        width: 125,
                        height: 63,
                        backgroundImage: "devil_menu_tag",
                        backgroundOpenImage: "devil_menu_tag_open",
                        onOpen: this.options.onOpenParty,
                        preventManualClose: true
                    }),
                    this.switcherEntry = new Control_Switcher({
                        value: "词条",
                        textX: 41,
                        textY: 18,
                        textSize: 28,
                        width: 125,
                        height: 63,
                        backgroundImage: "devil_menu_tag",
                        backgroundOpenImage: "devil_menu_tag_open",
                        onOpen: this.options.onOpenEntry,
                        preventManualClose: true
                    }),
                    this.switcherOption = new Control_Switcher({
                        value: "选项",
                        textX: 41,
                        textY: 18,
                        textSize: 28,
                        width: 125,
                        height: 63,
                        backgroundImage: "devil_menu_tag",
                        backgroundOpenImage: "devil_menu_tag_open",
                        onOpen: this.options.onOpenOption,
                        preventManualClose: true
                    }),
                    this.switcherArchive = new Control_Switcher({
                        value: "存档",
                        textX: 41,
                        textY: 18,
                        textSize: 28,
                        width: 125,
                        height: 63,
                        backgroundImage: "devil_menu_tag",
                        backgroundOpenImage: "devil_menu_tag_open",
                        onOpen: this.options.onOpenArchive,
                        preventManualClose: true
                    })
                ]
            })
        ])
    }
}
class Layout_MenuCharacter extends Layout_Base {
    initialize(options) {
        super.initialize(options)
        this.create([
            this.backgroundPatternImage = new Control_Image({src: 'menu_character_pattern'}),
            this.characterDraw = new Control_CharacterDraw({src: 1, x: 171, y: 153}),
            this.characterNameText = new Control_Text({size: 36, x: 228, y: 49, value: "哈姆雷特能睡"}),
            this.characterTitleText = new Control_Text({size: 30, x: 281, y: 95, value: "膜蛤天王"}),
            this.characterStatusAText = new Control_Text({size: 24, x: 262, y: 138, value: "LV20 凶暴魔"}),
            this.characterStatusExpProgress = new Control_Progress({
                color: "#c7820a",
                x: 288,
                y: 560,
                width: 272,
                height: 22,
                value: 0.6
            }),
            this.characterStatusHpProgress = new Control_Progress({
                color: "#aab41b",
                x: 288,
                y: 589,
                width: 272,
                height: 22,
                value: 0.8
            }),
            this.characterStatusMpProgress = new Control_Progress({
                color: "#6fc591",
                x: 288,
                y: 618,
                width: 272,
                height: 22,
                value: 0.4
            }),
            this.characterDescriptionText = new Control_Text({
                size: 20,
                x: 704,
                y: 127,
                width: 380,
                spacing: 21,
                value: "魔性觉醒为嗜睡症的奇异魔族，哈姆雷一直在寻找着真相，同时克制自己体内的嗜睡因子。\n当然了，这并不是一件容易的事情。"
            }),
            this.characterSkillList = new Control_CharacterSkillList({
                x: 689,
                y: 308,
                textColor: "black",
                iconX: 4,
                iconY: 4,
                nameX: 44,
                nameY: 9,
                mpCostX: 320,
                mpCostY: 9,
                background: "menu_character_skillList",
                popupBackground: "menu_character_skill_popup",
                itemListX: 12,
                itemListY: 51,
                itemListWidth: 372,
                itemListHeight: 244,
                itemListSpace: 41,
                popupTextX: 30,
                popupTextY: 20
            }),
            this.characterStatusFrame = new Control_Image({src: "menu_character_status_frame", x: 468, y: 78}),
            this.buffIcon1 = new Control_BuffIcon({value: 2, x: 472, y: 81}),
            this.buffIcon2 = new Control_BuffIcon({value: 3, x: 519, y: 81}),
            this.buffIcon3 = new Control_BuffIcon({value: 4, x: 566, y: 82})
        ])
    }

    changeCharacter(slotIndex) {
        //console.log('draw: ' + GetPlayerCharacterDraw(slotIndex))
        this.characterDraw.changeDraw(GetPlayerCharacterDraw(slotIndex))
        this.characterNameText.changeText(GetPlayerCharacterName(slotIndex))
        this.characterTitleText.changeText(GetPlayerCharacterNickname(slotIndex))
        this.characterStatusAText.changeText(`LV ${GetPlayerCharacterLevel(slotIndex)} ${GetPlayerCharacterClassName(slotIndex)}`)
        this.characterStatusExpProgress.changeProgress(GetPlayerCharacterExpProgress(slotIndex))
        this.characterStatusHpProgress.changeProgress(GetPlayerCharacterHpProgress(slotIndex))
        this.characterStatusMpProgress.changeProgress(GetPlayerCharacterMpProgress(slotIndex))
        this.characterDescriptionText.changeText(GetPlayerCharacterProfile(slotIndex))
        this.characterSkillList.changeSkillsData(GetPlayerCharacterSkillsData(slotIndex))
        this.characterSkillList.refreshCancelPopupInteractiveRectHeight()
        // TODO change character icon
    }

    refresh() {
        super.refresh()
        this.changeCharacter(DevilGame.currentActivePlayerCharacterSlotIndex)
    }
}
class Layout_MenuItem extends Layout_Base {
    initialize(options) {
        super.initialize(options)
        this.filterHandlerOption('onGoToEquipment')
        this.create([
            this.background = new Control_Image({src: 'menu_item_background'}),
            this.money = new Control_Text({size: 24, x: 237, y: 61, color: 'black'}),
            this.itemName = new Control_Label({size: 24, x: 433, y: 208, color: 'black', align: 'center'}),
            this.itemDescription = new Control_Text({
                size: 20,
                x: 253,
                y: 253,
                width: 347,
                color: 'black',
                spacing: 21
            }),
            this.itemList = new Control_PartyItemList({
                x: 688,
                y: 142,
                background: 'Item_Commons',
                onEnterItem: this.onEnterItem.bind(this),
                onGoToEquipment: this.options.onGoToEquipment
            })
        ])
    }

    onEnterItem(control) {
        var item = control.itemData
        if (item == null) {
            this.itemName.changeText('')
            this.itemDescription.changeText('')
        }
        else {
            this.itemName.changeText(item.name)
            this.itemDescription.changeText(item.description)
        }
    }

    refresh() {
        this.money.changeText(`金钱：${GetPlayerGold()} 通贝`)
        this.itemList.refreshItemsData()
    }
}
class Layout_MenuEquipment extends Layout_Base {
    initialize(options) {
        super.initialize(options)
        this.filterHandlerOption('onGoToEquipment')
        this.create([
            this.background = new Control_Image({x: 239, y: 71, src: 'menu_equipment_background'}),
            this.equipmentList = new Control_CharacterEquipmentList({
                x: 700,
                y: 200,
                onClickSwitchEquipment: this.onClickSwitchEquipment.bind(this),
                onUseBest: this.onUseBest.bind(this),
                onPreviewBest: this.onPreviewBest.bind(this),
                onUseUnloadAll: this.onUseUnloadAll.bind(this),
                onPreviewUnloadAll: this.onPreviewUnloadAll.bind(this),
                onStopPreview: this.onStopPreview.bind(this)
            }),
            this.warehouse = new Control_CharacterEquipmentWarehouseList({
                x: 695,
                y: 66,
                onWearEquipment: this.onWearEquipment.bind(this),
                onHoverEquipment: this.onHoverWarehouseEquipment.bind(this),
                onUnhoverEquipment: this.onUnhoverWarehouseEquipment.bind(this),
                visible: false,
                active: false
            }),
            this.status = new Control_CharacterEquipmentStatus({})
        ])
    }

    onClickSwitchEquipment() {
        this.equipmentList.close()
        this.warehouse.open(this.equipmentList.getSelectingEtypeId())
    }

    onUseBest() {
        DevilGame.getCurrentActivePlayerCharacter().optimizeEquipments()
        this.status.stopPreview()
    }

    onPreviewBest() {
        this.status.previewBest()
    }

    onUseUnloadAll() {
        DevilGame.getCurrentActivePlayerCharacter().clearEquipments()
        this.status.stopPreview()
    }

    onPreviewUnloadAll() {
        this.status.previewUnloadAll()
    }

    onStopPreview() {
        this.status.stopPreview()
    }

    onWearEquipment() {
        this.warehouse.close()
        let etypeId = this.warehouse.etypeId
        let itemData = this.warehouse.getSelectingItemData()
        DevilGame.getCurrentActivePlayerCharacter().changeEquip(etypeId - 1, itemData)
        this.equipmentList.refresh()
        this.equipmentList.open()
        this.status.stopPreview()
    }

    onHoverWarehouseEquipment() {
        this.status.preview(this.warehouse.getSelectingItemData())
    }

    onUnhoverWarehouseEquipment() {
        this.status.stopPreview()
    }

    refresh() {

    }
}
class Layout_MenuParty extends Layout_Base {
    initialize(options) {
        super.initialize(options)
        this.create([
            this.background = new Control_Image({src: 'menu_party_background'}),
            this.partyInfo = new Control_CharacterPartyInfo({
                nameX: 435,
                nameY: 205,
                talentX: 260,
                talentY: 248,
                spacing: 19,
                talentWidth: 300
            }),
            this.partyMember = new Control_CharacterPartyMember({
                x: 685,
                y: 138,
                onPreviewCharacter: this.onPreviewCharacter.bind(this)
            })
        ])
    }

    onPreviewCharacter(c) {
        let activeId = c.currentActiveId
        let character = GetPlayerCharacter(activeId)
        this.partyInfo.changeActor(character)
    }
}
class Layout_MenuEntry extends Layout_Base {
    initialize(options) {
        super.initialize(options)

        this.create([
            this.entryBackgroundImage = new Control_Image({src: 'menu_entry_background'}),
            this.entryList = new Control_EntryList({
                x: 690,
                y: 59,
                background: 'menu_entry_list_1',
                onEnterItem: this.onEnterItem.bind(this)
            }),
            this.entryNameLabel = new Control_Label({
                x: 343,
                y: 60,
                align: 'center',
                color: 'black',
                size: 30,
                value: "词条名字"
            }),
            this.entryDraw = new Control_EntryDraw({x: 241, y: 152, anchorX: 0, anchorY: 1}),
            this.entryDescriptionText = new Control_Text({
                x: 710,
                y: 542,
                width: 362,
                color: 'black',
                size: 20,
                spacing: 21,
                value: "词条描述词条描述词条描述词条描述词条描述词条描述词条描述词条描述词条描述"
            })
        ])

        this.entryDraw.changeDraw(this.entryList.status, '1')
    }

    /**
     * @param {Control_EntryListItem} control
     */
    onEnterItem(control) {
        //console.log('enter item', control)
        let itemData = control.itemData
        if (itemData == null) {
            this.entryNameLabel.changeText('')
            this.entryDraw.changeDraw(null)
            this.entryDescriptionText.changeText('')
        }
        else {
            this.entryNameLabel.changeText(itemData.name)
            this.entryDraw.changeDraw(this.entryList.status, itemData.draw)
            this.entryDescriptionText.changeText(itemData.description)
        }
    }
}
class Layout_MenuOption extends Layout_Base {
    initialize(options) {
        super.initialize(options)
        this.create([
            this.background = new Control_Image({src: 'menu_option_background'}),
            this.optionBoard = new Control_OptionBoard(),
            this.optionText = new Control_Image({src: 'menu_option_text'})
        ])
    }
}
class Layout_MenuArchive extends Layout_Base {
    initialize(options) {
        super.initialize(options)

        this.create([
            this.background = new Control_Image({src: 'menu_save_background'}),
            this.cards = new Control_VerticalLayoutGroup({
                x: 275, y: 46, spacing: 159, children: [
                    this.card0 = new Control_ArchiveCard(),
                    this.card1 = new Control_ArchiveCard(),
                    this.card2 = new Control_ArchiveCard(),
                    this.card3 = new Control_ArchiveCard(),
                ]
            }),
            this.scrollBar = new Control_ScrollBar({x: 1066, y: 50, width: 20, height: 620}),
            this.scrollRect = new Control_InteractiveRect({
                x: 1066,
                y: 50,
                width: 16,
                height: 620,
                onMouseTouchPressing: this.onMouseTouchPressingScrollBar.bind(this)
            })
        ])

        this.initMembers()
    }

    initMembers() {
        this.itemRange = {start: 0, end: 3}
        this.itemsData = GetSaveDataList()
    }

    onMouseTouchPressingScrollBar(control) {
        this.itemRange = control.getCellListRangeByTouchPositionYInControl(
            this.getVisibleItemCount(),
            this.getCurrentItemCount()
        )
        console.log(TouchInput.y, control.getCanvasPositionYInControlPercentage(TouchInput.y))
        console.log(this.itemRange, this.getVisibleItemCount(), this.getCurrentItemCount())
        this.refreshScroll()
    }

    getVisibleItemCount() {
        return 4
    }

    getCurrentItemCount() {
        return this.itemsData.length
    }

    refreshScroll() {
        this.scrollBar.y = this.getCurrentScrollBarY()
        this.scrollBar.changeHeight(this.getCurrentScrollBarHeight())
        this.refreshItemsData()
    }

    getCurrentScrollBarY() {
        return 50 + (620 * (this.itemRange.start / this.getCurrentItemCount()))
    }

    getCurrentScrollBarHeight() {
        return 620 * Math.min(1, (
                this.getVisibleItemCount() / this.getCurrentItemCount()
            ))
    }

    refreshItemsData() {
        let children = this.cards.children
        for (let i = 0; i < children.length; i++) {
            let child = children[i]
            let itemData
            if (this.itemRange == null) itemData = null
            else itemData = this.itemsData[this.itemRange.start + i]
            child.changeData(itemData)
        }
    }

    firstSavefileIndex() {
        return DataManager.lastAccessedSavefileId() - 1
    }
}
class Layout_MenuHeadPanel extends Layout_Base {
    initialize(options) {
        super.initialize(options)
        this.filterHandlerOption('onHeadChange')
        this.create([
            this.head0 = new Control_CharacterHead({
                x: 756,
                y: 28,
                width: 88,
                height: 88,
                background: 'menu_head_background',
                mask: 'menu_head_on_select_mask',
                onMouseClick: this.onHead0Clicked.bind(this),
                visible: false,
                active: false
            }),
            this.head1 = new Control_CharacterHead({
                x: 844,
                y: 28,
                width: 88,
                height: 88,
                background: 'menu_head_background',
                mask: 'menu_head_on_select_mask',
                onMouseClick: this.onHead1Clicked.bind(this),
                visible: false,
                active: false
            }),
            this.head2 = new Control_CharacterHead({
                x: 932,
                y: 28,
                width: 88,
                height: 88,
                background: 'menu_head_background',
                mask: 'menu_head_on_select_mask',
                onMouseClick: this.onHead2Clicked.bind(this),
                visible: false,
                active: false
            }),
            this.head3 = new Control_CharacterHead({
                x: 1020,
                y: 28,
                width: 88,
                height: 88,
                background: 'menu_head_background',
                mask: 'menu_head_on_select_mask',
                onMouseClick: this.onHead3Clicked.bind(this),
                visible: false,
                active: false
            }),
            this.headCurrent = new Control_CharacterHead({
                x: 1020,
                y: 28,
                width: 88,
                height: 88,
                background: 'menu_head_background',
                mask: 'menu_head_on_select_mask',
                onMouseClick: this.openCharacterHeadPanel.bind(this)
            })
        ])
        this.initializeHeads()
    }

    initializeHeads() {
        for (let i = 0; i <= 3; i++) {
            /**
             * @type {Control_CharacterHead}
             */
            let head = this['head' + i]
            head.changeHead(GetPlayerCharacterHead(i))
        }
    }

    openCharacterHeadPanel() {
        this.headCurrent.hide()
        for (var i = 0; i <= 3; i++) {
            this['head' + i].show()
        }
    }

    closeCharacterHeadPanel() {
        this.headCurrent.show()
        for (var i = 0; i <= 3; i++) this['head' + i].hide()
    }

    onHead0Clicked() {
        this.closeCharacterHeadPanel()
        this.changeCurrentHead(0)
    }

    onHead1Clicked() {
        this.closeCharacterHeadPanel()
        this.changeCurrentHead(1)
    }

    onHead2Clicked() {
        this.closeCharacterHeadPanel()
        this.changeCurrentHead(2)
    }

    onHead3Clicked() {
        this.closeCharacterHeadPanel()
        this.changeCurrentHead(3)
    }

    changeCurrentHead(slotIndex) {
        let head = GetPlayerCharacterHead(slotIndex)
        this.headCurrent.changeHead(head)
        DevilGame.currentActivePlayerCharacterSlotIndex = slotIndex
        this.callHandler('onHeadChange', this, slotIndex)
    }
}

class Scene_Menu extends Scene_Base {
    _create(controlList) {
        controlList.forEach(control => {
            this.addChild(control)
        })
    }

    initialize() {
        super.initialize()
        this.initializeDebugAction()
    }

    create() {
        super.create()
        this._create([
            this.common = new Layout_MenuCommon({
                onOpenCharacter: this.openCharacter.bind(this),
                onOpenItem: this.openItem.bind(this),
                onOpenEquipment: this.openEquipment.bind(this),
                onOpenParty: this.openParty.bind(this),
                onOpenEntry: this.openEntry.bind(this),
                onOpenOption: this.openOption.bind(this),
                onOpenArchive: this.openArchive.bind(this),
            }),

            this.character = new Layout_MenuCharacter(),
            this.item = new Layout_MenuItem({
                status: false,
                onGoToEquipment: () => {
                    this.common.switcherItem.close()
                    this.common.switcherEquipment.open()
                }
            }),
            this.equipment = new Layout_MenuEquipment({
                status: false
            }),
            this.party = new Layout_MenuParty({
                status: false
            }),
            this.entry = new Layout_MenuEntry({
                status: false
            }),
            this.option = new Layout_MenuOption({
                status: false
            }),
            this.archive = new Layout_MenuArchive({
                status: false
            }),

            this.headPanel = new Layout_MenuHeadPanel({
                onHeadChange: this.onHeadChange.bind(this)
            })
        ])
        this.selectLastMenu(DevilGame.currentActiveMenuId)
        this.selectLastHead(DevilGame.currentActivePlayerCharacterSlotIndex) // after select menu
    }

    initializeDebugAction() {
        var i
        $gameParty.gainGold(13333)
        for (i = 1; i <= 173; i++) {
            $gameParty.gainItem($dataItems[i], 10)
        }
        for (i = 1; i <= 87; i++) {
            $gameParty.gainItem($dataWeapons[i], 5)
        }
        for (i = 1; i <= 124; i++) {
            $gameParty.gainItem($dataArmors[i], 5)
        }
    }

    selectLastHead(slotIndex) {
        this.headPanel.changeCurrentHead(slotIndex)
    }

    selectLastMenu(menuId) {
        switch (menuId) {
            case 'character':
                this.openCharacter()
                this.common.switcherCharacter.open()
                return
            case 'item':
                this.openItem()
                this.common.switcherItem.open()
                return
            case 'equipment':
                this.openEquipment()
                this.common.switcherEquipment.open()
                return
            case 'party':
                this.openParty()
                this.common.switcherParty.open()
                return
            case 'entry':
                this.openEntry()
                this.common.switcherEntry.open()
                return
            case 'option':
                this.openOption()
                this.common.switcherOption.open()
                return
            case 'archive':
                this.openArchive()
                this.common.switcherArchive.open()
                return
        }
        throw new Error(`UNKNOWN MENU: ${menuId}`)
    }

    openCharacter() {
        this.headPanel.open()
        this.character.refresh()
        this.switchMenu(this.character)
    }

    openItem() {
        this.headPanel.close()
        this.item.refresh()
        this.switchMenu(this.item)
    }

    openEquipment() {
        this.headPanel.open()
        this.equipment.refresh()
        this.switchMenu(this.equipment)
    }

    openParty() {
        this.headPanel.close()
        this.party.refresh()
        this.switchMenu(this.party)
    }

    openEntry() {
        this.headPanel.close()
        this.entry.refresh()
        this.switchMenu(this.entry)
    }

    openOption() {
        this.headPanel.close()
        this.option.refresh()
        this.switchMenu(this.option)
    }

    openArchive() {
        this.headPanel.close()
        this.archive.refresh()
        this.switchMenu(this.archive)
    }

    switchMenu(nextMenu) {
        if (this.lastMenu != null) this.lastMenu.close()
        nextMenu.open()
        this.lastMenu = nextMenu
    }

    onHeadChange(_, slotIndex) {
        this.character.changeCharacter(slotIndex)
    }

    //update() {
    //    super.update()
    //    if (Input.isRepeated('cancel')) {
    //        this.popScene()
    //    }
    //}
    //onOpenCharacter() {
    //    this.refreshCharacterMenu()
    //    this.showCharacterHeadPanel()
    //    this.changeMenu('character')
    //}
    //onOpenItem() {
    //    var gold = GetPlayerGold()
    //    this.getControlById('menu_item_gold').changeText(`金钱：${gold} 通贝`)
    //
    //    this.hideCharacterHeadPanel()
    //    this.changeMenu('item')
    //}
    //onOpenEquipment() {
    //    this.showCharacterHeadPanel()
    //    this.changeMenu('equipment')
    //    this.getControlById('menu_equipment_list').refresh()
    //    this.getControlById('menu_equipment_status').refresh()
    //}
    //onOpenParty() {
    //    this.hideCharacterHeadPanel()
    //    this.getControlById('menu_party_info').changeActor(this.getSelectingPlayerCharacter())
    //    this.changeMenu('party')
    //}
    //onOpenEntry() {
    //    this.hideCharacterHeadPanel()
    //    /** @type Control_Entry */
    //    var controller = this.getControlById("menu_entry_controller")
    //    controller.onOpen()
    //    this.changeMenu('entry')
    //}
    //onOpenOption() {
    //    this.hideCharacterHeadPanel()
    //    this.changeMenu('option')
    //}
    //onOpenArchive() {
    //    this.hideCharacterHeadPanel()
    //    this.changeMenu('archive')
    //}
    //onEnterItem(control) {
    //    var item = control.itemData
    //    if (item == null) {
    //        this.getControlById('menu_item_name').changeText("")
    //        this.getControlById('menu_item_description').changeText("")
    //    }
    //    else {
    //        this.getControlById('menu_item_name').changeText(item.name)
    //        this.getControlById('menu_item_description').changeText(item.description)
    //    }
    //}
    //onGoToEquipment() {
    //    this.openSubMenu('equipment')
    //}
    //onClickSwitchEquipment() {
    //    this.getControlById('menu_equipment_list').close()
    //    console.log('etypeId: ' + this.getControlById('menu_equipment_list').getSelectingEtypeId())
    //    this.getControlById('menu_equipment_warehouse').open(this.getControlById('menu_equipment_list').getSelectingEtypeId())
    //}
    //onWearEquipment() {
    //    this.getControlById('menu_equipment_warehouse').close()
    //    var etypeId = this.getControlById('menu_equipment_warehouse').etypeId
    //    var itemData = this.getControlById('menu_equipment_warehouse').getSelectingItemData()
    //    this.getSelectingPlayerCharacter().changeEquip(etypeId - 1, itemData)
    //    this.getControlById('menu_equipment_list').refresh()
    //    this.getControlById('menu_equipment_list').open()
    //    this.getControlById('menu_equipment_status').stopPreview()
    //}
    //onHoverWarehouseEquipment() {
    //    this.getControlById('menu_equipment_status').preview(this.getControlById('menu_equipment_warehouse').getSelectingItemData())
    //}
    //onUnhoverWarehouseEquipment() {
    //    this.getControlById('menu_equipment_status').stopPreview()
    //}
    //onPreviewBest() {
    //    this.getControlById('menu_equipment_status').previewBest()
    //}
    //onUseUnloadAll() {
    //    this.getSelectingPlayerCharacter().clearEquipments()
    //    this.getControlById('menu_equipment_status').stopPreview()
    //}
    //onPreviewUnloadAll() {
    //    this.getControlById('menu_equipment_status').previewUnloadAll()
    //}
    //onStopPreview() {
    //    this.getControlById('menu_equipment_status').stopPreview()
    //}
    //onPreviewCharacter(c) {
    //    var activeId = c.currentActiveId
    //    var character = GetPlayerCharacter(activeId)
    //    this.getControlById('menu_party_info').changeActor(character)
    //}
    //initializeMembers() {
    //    this._lastActiveMenu = null
    //    this._loadSuccess = false
    //}
    //initializeHeadPanel() {
    //    for (var i = 0; i < GetPlayerCharacterCount(); i++) {
    //        this.getControlById('menu_character_head_' + i).changeHead(GetPlayerCharacterHead(i))
    //    }
    //    this.getControlById('menu_character_head_current').changeHead(GetPlayerCharacterHead(Scene_Menu._lastSelectedPlayerCharacterIndex))
    //}
    //openLastSubMenu() {
    //    this.openSubMenu(Scene_Menu._lastActiveMenuId)
    //}
    //refreshCharacterHeadPanel() {
    //    var index = Scene_Menu._lastSelectedPlayerCharacterIndex
    //    var head = GetPlayerCharacterHead(index)
    //    this.getControlById('menu_character_head_current').changeHead(head)
    //}
    //refreshCharacterMenu() {
    //    var index = Scene_Menu._lastSelectedPlayerCharacterIndex
    //    var name = GetPlayerCharacterName(index)
    //    var profile = GetPlayerCharacterProfile(index)
    //    var title = GetPlayerCharacterNickname(index)
    //    var statusA = "LV" + GetPlayerCharacterLevel(index) + " " + GetPlayerCharacterClassName(index)
    //    var draw = GetPlayerCharacterDraw(index)
    //    var progressHp = GetPlayerCharacterHpProgress(index)
    //    var progressMp = GetPlayerCharacterMpProgress(index)
    //    var progressExp = GetPlayerCharacterExpProgress(index)
    //    var buff1 = GetPlayerCharacterState1(index)
    //    var buff2 = GetPlayerCharacterState2(index)
    //    var buff3 = GetPlayerCharacterState3(index)
    //    var skillsData = GetPlayerCharacterSkillsData(index)
    //
    //    this.getControlById('menu_character_name').changeText(name)
    //    this.getControlById('menu_character_desc').changeText(profile)
    //    this.getControlById('menu_character_title').changeText(title)
    //    this.getControlById('menu_character_statusA').changeText(statusA)
    //    this.getControlById('menu_character_draw').changeDraw(draw)
    //    this.getControlById('menu_character_status_exp').changeProgress(progressExp)
    //    this.getControlById('menu_character_status_hp').changeProgress(progressHp)
    //    this.getControlById('menu_character_status_mp').changeProgress(progressMp)
    //    this.getControlById('menu_character_buff_1').changeIcon(buff1)
    //    this.getControlById('menu_character_buff_2').changeIcon(buff2)
    //    this.getControlById('menu_character_buff_3').changeIcon(buff3)
    //    this.getControlById('menu_character_skill_list').changeSkillsData(skillsData)
    //}
    //selectPlayerCharacter(index) { // (slotIndex)index: 0 ~ 3
    //    Scene_Menu._lastSelectedPlayerCharacterIndex = index
    //    this.refreshCharacterMenu()
    //    this.refreshCharacterHeadPanel()
    //}
    //changeMenu(targetMenuSwitcherId) {
    //    if (this._lastActiveMenu) {
    //        this._lastActiveMenu.hide()
    //        this._lastActiveMenu.deactivate()
    //    }
    //    var targetMenu = this.getControlById("menu_" + targetMenuSwitcherId)
    //    targetMenu.show()
    //    targetMenu.activate()
    //    this._lastActiveMenu = targetMenu
    //    Scene_Menu._lastActiveMenuId = targetMenuSwitcherId
    //}
    //openSubMenu(id) {
    //    this.getControlById(id).open()
    //}
    //getSelectingPlayerCharacter() {
    //    return GetPlayerCharacter(Scene_Menu._lastSelectedPlayerCharacterIndex)
    //}
    //terminate() {
    //    if (this._loadSuccess) {
    //        $gameSystem.onAfterLoad()
    //    }
    //}
}
