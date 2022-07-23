

//�\�\�\�\�\�\�\�\�\OBJ_YoutubeLink�[�\�\�\�\�\�\�\�\�\�\�\�\�\
const YoutubeLink_Click = new Entity()
YoutubeLink_Click.addComponent(new PlaneShape())
YoutubeLink_Click.addComponent(new Transform({
    position: new Vector3(1.750002, 1.204, 1.159),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.515, 0.484, 0.183)
}))

YoutubeLink_Click.addComponent(new OnPointerDown((e) =>{

    //��������URL �ύX�|�C���g ������������������������������������������������
    openExternalURL("https://youtube")
},
    {
        hoverText: "Open youtube",
    }
))

//�\�\�\�\�}�e�B�\�\�\�\�\�\�\�\�\�\
const Transparent_color = new Material()
Transparent_color.albedoColor = new Color4(1, 0, 0, 0)
YoutubeLink_Click.addComponent(Transparent_color)


engine.addEntity(YoutubeLink_Click)


//�\�\�\�\�\�\�\�\�\OBJ_TwitterLink�[�\�\�\�\�\�\�\�\�\�\�\�\�\
const TwitterLink_Click = new Entity()
TwitterLink_Click.addComponent(new PlaneShape())
TwitterLink_Click.addComponent(new Transform({
    position: new Vector3(2.723001, 1.234, 1.184003),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.515, 0.484, 0.183)

}))
//�\�\�\�\�}�e�B�\�\�\�\�\�\�\�\�\�\
TwitterLink_Click.addComponent(Transparent_color)



TwitterLink_Click.addComponent(new OnPointerDown((e) => {

    //��������URL �ύX�|�C���g ������������������������������������������������������
    openExternalURL("https://twitter")
},
    {
        hoverText: "Open twitter",
    }
))

engine.addEntity(TwitterLink_Click)


//�\�\�\�\�\�\�\�\�\OBJ_WebsiteLink�[�\�\�\�\�\�\�\�\�\�\�\�\�\
const WebsiteLink_Click = new Entity()
WebsiteLink_Click.addComponent(new PlaneShape())
WebsiteLink_Click.addComponent(new Transform({
    position: new Vector3(3.719, 1.204, 1.172),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.515, 0.484, 0.183)
}))
//�\�\�\�\�}�e�B�\�\�\�\�\�\�\�\�\�\
WebsiteLink_Click.addComponent(Transparent_color)


WebsiteLink_Click.addComponent(new OnPointerDown((e) => {

    //��������URL �ύX�|�C���g ������������������������������������������������������������
    openExternalURL("https://website")
},
    {
        hoverText: "Open Website",
    }
))
engine.addEntity(WebsiteLink_Click)


//---------------Music�̈�----------------------------------------------------------------------------------


//-----------Music_Box1---------------------------
const Music_Box1_click = new Entity()
Music_Box1_click.addComponent(new BoxShape())   //�`����������
Music_Box1_click.addComponent(new Transform({
    position: new Vector3(14.136, 1.794, 5.497998),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.6, 0.6, 0.6)
}))
//�\�\�\�\�}�e�B�\�\�\�\�\�\�\�\�\�\
Music_Box1_click.addComponent(Transparent_color)




//-----------Music_Box2---------------------------
const Music_Box2_click = new Entity()
Music_Box2_click.addComponent(new BoxShape())   //�`����������
Music_Box2_click.addComponent(new Transform({
    position: new Vector3(14.136, 1.794, 10.278),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.6, 0.6, 0.6)
}))
//�\�\�\�\�}�e�B�\�\�\�\�\�\�\�\�\�\
Music_Box2_click.addComponent(Transparent_color)

//-----------Music_Box3---------------------------
const Music_Box3_click = new Entity()
Music_Box3_click.addComponent(new BoxShape())   //�`����������
Music_Box3_click.addComponent(new Transform({
    position: new Vector3(10.776, 1.794, 13.078),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.6, 0.6, 0.6)
}))
//�\�\�\�\�}�e�B�\�\�\�\�\�\�\�\�\�\
Music_Box3_click.addComponent(Transparent_color)

//-----------Music_Box4---------------------------
const Music_Box4_click = new Entity()
Music_Box4_click.addComponent(new BoxShape())   //�`����������
Music_Box4_click.addComponent(new Transform({
    position: new Vector3(5.386, 1.794, 12.838),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.6, 0.6, 0.6)
}))
//�\�\�\�\�}�e�B�\�\�\�\�\�\�\�\�\�\
Music_Box4_click.addComponent(Transparent_color)

//-----------Music_Box5---------------------------
const Music_Box5_click = new Entity()
Music_Box5_click.addComponent(new BoxShape())   //�`����������
Music_Box5_click.addComponent(new Transform({
    position: new Vector3(1.826, 1.794, 10.288),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.6, 0.6, 0.6)
}))
//�\�\�\�\�}�e�B�\�\�\�\�\�\�\�\�\�\
Music_Box5_click.addComponent(Transparent_color)


//-----------Music_Box6---------------------------
const Music_Box6_click = new Entity()
Music_Box6_click.addComponent(new BoxShape())   //�`����������
Music_Box6_click.addComponent(new Transform({
    position: new Vector3(1.836, 1.794, 5.438002),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.6, 0.6, 0.6)
}))
//�\�\�\�\�}�e�B�\�\�\�\�\�\�\�\�\�\
Music_Box6_click.addComponent(Transparent_color)

//--------------�G���W���ǉ�------------------------------------------
engine.addEntity(Music_Box1_click)
engine.addEntity(Music_Box2_click)
engine.addEntity(Music_Box3_click)
engine.addEntity(Music_Box4_click)
engine.addEntity(Music_Box5_click)
engine.addEntity(Music_Box6_click)


//-------------Music OnClick---------------------------------------------------------

let Sounds1_OnOff = false      //Sounds�̃I���I�t��bool�Aconst�s��
let Sounds2_OnOff = false      //Sounds�̃I���I�t��bool�Aconst�s��
let Sounds3_OnOff = false      //Sounds�̃I���I�t��bool�Aconst�s��
let Sounds4_OnOff = false      //Sounds�̃I���I�t��bool�Aconst�s��
let Sounds5_OnOff = false      //Sounds�̃I���I�t��bool�Aconst�s��
let Sounds6_OnOff = false      //Sounds�̃I���I�t��bool�Aconst�s��


Music_Box1_click.addComponent(new OnPointerDown((e) =>
{
    Sounds1_OnOff = !Sounds1_OnOff            //bool���C���o�[�X���邽�߂̃R�[�h
    if (Sounds1_OnOff == true) {

        Sounds2_OnOff = false
        Sounds3_OnOff = false
        Sounds4_OnOff = false
        Sounds5_OnOff = false
        Sounds6_OnOff = false   

              sound1_source.playing = true
        sound2_source.playing = false
        sound3_source.playing = false
        sound4_source.playing = false
        sound5_source.playing = false
        sound6_source.playing = false
    }

    if (Sounds1_OnOff == false) {
        sound1_source.playing = false
    }
},
    
    {  
        hoverText: "Music  On/Off",
    }
))


Music_Box2_click.addComponent(new OnPointerDown((e) => {
    Sounds2_OnOff = !Sounds2_OnOff            //bool���C���o�[�X���邽�߂̃R�[�h
    if (Sounds2_OnOff == true) {

        Sounds1_OnOff = false
        Sounds3_OnOff = false
        Sounds4_OnOff = false
        Sounds5_OnOff = false
        Sounds6_OnOff = false

        sound1_source.playing = false
               sound2_source.playing = true
        sound3_source.playing = false
        sound4_source.playing = false
        sound5_source.playing = false
        sound6_source.playing = false
    }

    if (Sounds2_OnOff == false) {
        sound2_source.playing = false
    }
},

    {
        hoverText: "Music  On/Off",
    }
))


Music_Box3_click.addComponent(new OnPointerDown((e) => {
    Sounds3_OnOff = !Sounds3_OnOff            //bool���C���o�[�X���邽�߂̃R�[�h
    if (Sounds3_OnOff == true) {

        Sounds1_OnOff = false
        Sounds2_OnOff = false
        Sounds4_OnOff = false
        Sounds5_OnOff = false
        Sounds6_OnOff = false

        sound1_source.playing = false
        sound2_source.playing = false
                sound3_source.playing = true
        sound4_source.playing = false
        sound5_source.playing = false
        sound6_source.playing = false
    }

    if (Sounds3_OnOff == false) {
        sound3_source.playing = false
    }
},

    {
        hoverText: "Music  On/Off",
    }
))


Music_Box4_click.addComponent(new OnPointerDown((e) => {
    Sounds4_OnOff = !Sounds4_OnOff            //bool���C���o�[�X���邽�߂̃R�[�h
    if (Sounds4_OnOff == true) {

        Sounds1_OnOff = false
        Sounds2_OnOff = false
        Sounds3_OnOff = false
        Sounds5_OnOff = false
        Sounds6_OnOff = false

        sound1_source.playing = false
        sound2_source.playing = false
        sound3_source.playing = false
            sound4_source.playing = true
        sound5_source.playing = false
        sound6_source.playing = false
    }

    if (Sounds4_OnOff == false) {
        sound4_source.playing = false
    }
},

    {
        hoverText: "Music  On/Off",
    }
))

Music_Box5_click.addComponent(new OnPointerDown((e) => {
    Sounds5_OnOff = !Sounds5_OnOff            //bool���C���o�[�X���邽�߂̃R�[�h
    if (Sounds5_OnOff == true) {

        Sounds1_OnOff = false
        Sounds2_OnOff = false
        Sounds3_OnOff = false
        Sounds4_OnOff = false
        Sounds6_OnOff = false

        sound1_source.playing = false
        sound2_source.playing = false
        sound3_source.playing = false
        sound4_source.playing = false
             sound5_source.playing = true
        sound6_source.playing = false
    }

    if (Sounds5_OnOff == false) {
        sound5_source.playing = false
    }
},

    {
        hoverText: "Music  On/Off",
    }
))


Music_Box6_click.addComponent(new OnPointerDown((e) => {
    Sounds6_OnOff = !Sounds6_OnOff            //bool���C���o�[�X���邽�߂̃R�[�h
    if (Sounds6_OnOff == true) {

        Sounds1_OnOff = false
        Sounds2_OnOff = false
        Sounds3_OnOff = false
        Sounds4_OnOff = false
        Sounds5_OnOff = false

        sound1_source.playing = false
        sound2_source.playing = false
        sound3_source.playing = false
        sound4_source.playing = false
        sound5_source.playing = false
             sound6_source.playing = true
    }

    if (Sounds6_OnOff == false) {
        sound6_source.playing = false
    }
},

    {
        hoverText: "Music  On/Off",
    }
))





//----------------------------------------------------------------------------------------------------
//�\�\�\�\���y1�\�\�\�\�\�\ 
//��������URL �ύX�|�C���g ��������������������������������������������������������
const sound1 = new AudioClip("sounds/1_mp3.mp3")
const sound1_source = new AudioSource(sound1)
sound1_source.loop = true
sound1_source.playing = false
sound1_source.volume = 0.9
Music_Box1_click.addComponent(sound1_source)


//�\�\�\�\���y2�\�\�\�\�\�\
//��������URL �ύX�|�C���g ��������������������������������������������������������
const sound2 = new AudioClip("sounds/2_mp3.mp3")
const sound2_source = new AudioSource(sound2)
sound2_source.loop = true
sound2_source.playing = false
sound2_source.volume = 0.9
Music_Box2_click.addComponent(sound2_source)


//�\�\�\�\���y3�\�\�\�\�\�\
//��������URL �ύX�|�C���g ��������������������������������������������������������
const sound3 = new AudioClip("sounds/3_mp3.mp3")
const sound3_source = new AudioSource(sound3)
sound3_source.loop = true
sound3_source.playing = false
sound3_source.volume = 0.9
Music_Box3_click.addComponent(sound3_source)

//�\�\�\�\���y4�\�\�\�\�\�\
//��������URL �ύX�|�C���g ��������������������������������������������������������
const sound4 = new AudioClip("sounds/4_mp3.mp3")
const sound4_source = new AudioSource(sound4)
sound4_source.loop = true
sound4_source.playing = false
sound4_source.volume = 0.9
Music_Box4_click.addComponent(sound4_source)

//�\�\�\�\���y5�\�\�\�\�\�\
//��������URL �ύX�|�C���g ��������������������������������������������������������
const sound5 = new AudioClip("sounds/5_mp3.mp3")
const sound5_source = new AudioSource(sound5)
sound5_source.loop = true
sound5_source.playing = false
sound5_source.volume = 0.9
Music_Box5_click.addComponent(sound5_source)

//�\�\�\�\���y6�\�\�\�\�\�\
//��������URL �ύX�|�C���g ��������������������������������������������������������
const sound6 = new AudioClip("sounds/6_mp3.mp3")
const sound6_source = new AudioSource(sound6)
sound6_source.loop = true
sound6_source.playing = false
sound6_source.volume = 0.9
Music_Box6_click.addComponent(sound6_source)



