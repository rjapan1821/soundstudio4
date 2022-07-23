/*
    メモ
    Reverseの説明1には、 1=パネル1     2=パネル2     3= パネル3     4= パネル4
    Reverseの説明2には、 1=パネル5     2=パネル6     3=Person     4=Poster

*/


//----------------Plane領域---------------------------------------------------------------------------------------
//-----------------Explain_Plane1---------------------------
const Explain_Plane1 = new Entity()
Explain_Plane1.addComponent(new Transform({
    position: new Vector3(15.17899, 1.394, 4.545996),
    rotation: new Quaternion(0.7071068, -3.090862E-08, 0.7071068, -3.090862E-08),
    scale: new Vector3(1.16, 1.16, 1.16)
}))
engine.addEntity(Explain_Plane1)


//-----------------Explain_Plane2---------------------------
const Explain_Plane2 = new Entity()
Explain_Plane2.addComponent(new Transform({
    position: new Vector3(15.159, 1.394, 9.376),
    rotation: new Quaternion(0.7071068, -3.090862E-08, 0.7071068, -3.090862E-08),
    scale: new Vector3(1.16, 1.16, 1.16)
}))
engine.addEntity(Explain_Plane2)


//-----------------Explain_Plane3---------------------------
const Explain_Plane3 = new Entity()
Explain_Plane3.addComponent(new Transform({
    position: new Vector3(11.569, 1.394, 15.006),
    rotation: new Quaternion(0, 0, 1, -4.371139E-08),
    scale: new Vector3(1.16, 1.16, 1.16)
}))
engine.addEntity(Explain_Plane3)



//-----------------Explain_Plane4---------------------------
const Explain_Plane4 = new Entity()
Explain_Plane4.addComponent(new Transform({
    position: new Vector3(4.438994, 1.394, 14.966),
    rotation: new Quaternion(0, 0, 1, -4.371139E-08),
    scale: new Vector3(1.16, 1.16, 1.16)
}))
engine.addEntity(Explain_Plane4)



//-----------------Explain_Plane5---------------------------
const Explain_Plane5 = new Entity()
Explain_Plane5.addComponent(new Transform({
    position: new Vector3(1.088993, 1.394, 9.395995),
    rotation: new Quaternion(0.7071068, -3.090862E-08, -0.7071068, 3.090862E-08),
    scale: new Vector3(1.16, 1.16, 1.16)
}))
engine.addEntity(Explain_Plane5)



//-----------------Explain_Plane6---------------------------
const Explain_Plane6 = new Entity()
Explain_Plane6.addComponent(new Transform({
    position: new Vector3(1.099, 1.394, 4.546),
    rotation: new Quaternion(0.7071068, -3.090862E-08, -0.7071068, 3.090862E-08),
    scale: new Vector3(1.16, 1.16, 1.16)
}))
engine.addEntity(Explain_Plane6)


//-----------------Person_Plane---------------------------
const Person_Plane = new Entity()
Person_Plane.addComponent(new Transform({
    position: new Vector3(13.163, 1.724001, 0.8149995),
    rotation: new Quaternion(1, -4.371139E-08, -4.371139E-08, 1.910685E-15),
    scale: new Vector3(3.006, 1.964002, 0.551)
}))
engine.addEntity(Person_Plane)


//-----------------Poster_Plane---------------------------
const Poster_Plane = new Entity()
Poster_Plane.addComponent(new Transform({
    position: new Vector3(13.123, 2.684, 0.3849999),
    rotation: new Quaternion(0, 0, 1, -4.371139E-08),
    scale: new Vector3(3.086, 4.404, 0.551)
}))
engine.addEntity(Poster_Plane)


//-----------------Poster2_Plane---------------------------
const Poster2_Plane = new Entity()
Poster2_Plane.addComponent(new Transform({
    position: new Vector3(13.123, 2.684, 15.50501),
    rotation: new Quaternion(1, -4.371139E-08, -4.371139E-08, 1.910685E-15),
    scale: new Vector3(3.086, 4.404, 0.551)
}))
engine.addEntity(Poster2_Plane)




//----------------UV領域---------------------------------------------------------------------------------------

//------ UV__Ex_plane1----------
const Explain_Plane1_UV = new PlaneShape()
Explain_Plane1_UV.uvs = [
    //UV__4面の1番目 LeftUpper
    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,

    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,
]
Explain_Plane1.addComponent(Explain_Plane1_UV)




//------ UV__Ex_plane2----------
const Explain_Plane2_UV = new PlaneShape()
Explain_Plane2_UV.uvs = [
    //UV__4面の2番目 RightUpper
    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,

    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,
]
Explain_Plane2.addComponent(Explain_Plane2_UV)



//------ UV__Ex_plane3----------
const Explain_Plane3_UV = new PlaneShape()
Explain_Plane3_UV.uvs = [
    //UV__4面の3番目 LeftUnder
    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,

    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,
]
Explain_Plane3.addComponent(Explain_Plane3_UV)

//------ UV__Ex_plane4----------
const Explain_Plane4_UV = new PlaneShape()
Explain_Plane4_UV.uvs = [
    //UV__4面の4番目 RightUnder
    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,

    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,
]
Explain_Plane4.addComponent(Explain_Plane4_UV)


//------ UV__Ex_plane5----------
const Explain_Plane5_UV = new PlaneShape()
Explain_Plane5_UV.uvs = [
    //UV__4面の1番目 LeftUpper
    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,

    0, 1,

    0.5, 1,

    0.5, 0.5,

    0, 0.5,
]
Explain_Plane5.addComponent(Explain_Plane5_UV)



//------ UV__Ex_plane6----------
const Explain_Plane6_UV = new PlaneShape()
Explain_Plane6_UV.uvs = [
    //UV__4面の2番目 RightUpper
    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,

    0.5, 1,

    1, 1,

    1, 0.5,

    0.5, 0.5,
]
Explain_Plane6.addComponent(Explain_Plane6_UV)


//------ UV__Person_plane----------
const Person_Plane_UV = new PlaneShape()
Person_Plane_UV.uvs = [
    //UV__4面の3番目 LeftUnder
    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,

    0, 0.5,

    0.5, 0.5,

    0.5, 0,

    0, 0,
]
Person_Plane.addComponent(Person_Plane_UV)

//------ UV__Poster_plane----------
const Poster_Plane_UV = new PlaneShape()
Poster_Plane_UV.uvs = [
    //UV__4面の4番目 RightUnder
    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,

    0.5, 0.5,

    1, 0.5,

    1, 0,

    0.5, 0,
]
Poster_Plane.addComponent(Poster_Plane_UV)
Poster2_Plane.addComponent(Poster_Plane_UV)





//----------------Onclick領域---------------------------------------------------------------------------------------

//------------Explain_Plane1--------------------------
Explain_Plane1.addComponent(new OnPointerDown((e) => {
    
        canvas.visible = true                   //ボタンクリックで、canvasを表示する
        text1.visible = true                   //クリックでテキスト1(MEA AQUA説明文)表示
        close_botton.visible = true          //クリックで閉じるボタン表示
    },
    {
        hoverText: "Explanation in English",
    }
))



//------------Explain_Plane2--------------------------
Explain_Plane2.addComponent(new OnPointerDown((e) => {

    canvas.visible = true                   //ボタンクリックで、canvasを表示する
    text2.visible = true                   //クリックでテキスト2表示
    close_botton.visible = true          //クリックで閉じるボタン表示
},
    {
        hoverText: "Explanation in English",
    }
))


//------------Explain_Plane3--------------------------
Explain_Plane3.addComponent(new OnPointerDown((e) => {

    canvas.visible = true                   //ボタンクリックで、canvasを表示する
    text3.visible = true                   //クリックでテキスト2表示
    close_botton.visible = true          //クリックで閉じるボタン表示
},
    {
        hoverText: "Explanation in English",
    }
))

//------------Explain_Plane4--------------------------
Explain_Plane4.addComponent(new OnPointerDown((e) => {

    canvas.visible = true                   //ボタンクリックで、canvasを表示する
    text4.visible = true                   //クリックでテキスト2表示
    close_botton.visible = true          //クリックで閉じるボタン表示
},
    {
        hoverText: "Explanation in English",
    }
))


//------------Explain_Plane5--------------------------
Explain_Plane5.addComponent(new OnPointerDown((e) => {

    canvas.visible = true                   //ボタンクリックで、canvasを表示する
    text5.visible = true                   //クリックでテキスト2表示
    close_botton.visible = true          //クリックで閉じるボタン表示
},
    {
        hoverText: "Explanation in English",
    }
))


//------------Explain_Plane6--------------------------
Explain_Plane6.addComponent(new OnPointerDown((e) => {

    canvas.visible = true                   //ボタンクリックで、canvasを表示する
    text6.visible = true                   //クリックでテキスト2表示
    close_botton.visible = true          //クリックで閉じるボタン表示
},
    {
        hoverText: "Explanation in English",
    }
))


//------------Person_Plane--------------------------
Person_Plane.addComponent(new OnPointerDown((e) => {

    canvas.visible = true                   //ボタンクリックで、canvasを表示する
    text7.visible = true                   //クリックでテキスト2表示
    close_botton.visible = true          //クリックで閉じるボタン表示
},
    {
        hoverText: "Explanation in English",
    }
))


/*     ポスターはクリックが外側にくるのでクリックは無し
//------------Poster_Plane--------------------------
Poster_Plane.addComponent(new OnPointerDown((e) => {

    canvas.visible = true                   //ボタンクリックで、canvasを表示する
    text8.visible = true                   //クリックでテキスト2表示
    close_botton.visible = true          //クリックで閉じるボタン表示
},
    {
        hoverText: "Explanation in English",
    }
))
*/


//----------------UI領域-------------------------------------------------------------------------------------------

const canvas = new UICanvas()
canvas.visible = false        //初期設定で、キャンバスを見えなくする


//------------背景領域、60*60の白_半透明_背景---------------------------
const UI_Back1 = new UIContainerStack(canvas)      //canvasの子として配置、
UI_Back1.adaptWidth = false
UI_Back1.width = "70%"
UI_Back1.height = "70%"

UI_Back1.positionY = 0
UI_Back1.positionX = 0
UI_Back1.color = Color4.White()
UI_Back1.opacity = 0.5
UI_Back1.hAlign = "center"
UI_Back1.vAlign = "center"
UI_Back1.stackOrientation = UIStackOrientation.VERTICAL



//------------text1 =  Explain_Plane1---------------------------
const text1 = new UIText(canvas)

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
text1.value = "Explaination1 in English"

text1.color = Color4.Black()
text1.hAlign = "center"    //右寄り、中央、左寄りに配置 =有効値は left,center,righr
text1.vAlign = "center"    //上、中央、下に配置    有効値は   top,cenetr,bottom
text1.fontSize = 22
text1.width = "55%"        //%で表記する(数値でもできる)。
text1.positionY = -30
text1.opacity = 1
text1.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
text1.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない
text1.visible = false                         //初期設定でtext1を表示させない



//------------text2 =  Explain_Plane2---------------------------
const text2 = new UIText(canvas)

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
text2.value = "Explaination2 in English"

text2.color = Color4.Black()
text2.hAlign = "center"    //右寄り、中央、左寄りに配置 =有効値は left,center,righr
text2.vAlign = "center"    //上、中央、下に配置    有効値は   top,cenetr,bottom
text2.fontSize = 22
text2.width = "55%"        //%で表記する(数値でもできる)。
text2.positionY = -30
text2.opacity = 1
text2.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
text2.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない
text2.visible = false                         //初期設定でtext1を表示させない

//------------text3 =  Explain_Plane3---------------------------
const text3 = new UIText(canvas)

 //★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
text3.value = "Explaination3 in English"     

text3.color = Color4.Black()
text3.hAlign = "center"    //右寄り、中央、左寄りに配置 =有効値は left,center,right
text3.vAlign = "center"    //上、中央、下に配置    有効値は   top,cenetr,bottom
text3.fontSize = 22
text3.width = "55%"        //%で表記する(数値でもできる)。
text3.positionY = -20
text3.opacity = 1
text3.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
text3.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない
text3.visible = false                       //初期設定でtext3を表示させない

//------------text4 =  Explain_Plane4---------------------------
const text4 = new UIText(canvas)

 //★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
text4.value = "Explaination4 in English"

text4.color = Color4.Black()
text4.hAlign = "center"    //右寄り、中央、左寄りに配置 =有効値は left,center,right
text4.vAlign = "center"    //上、中央、下に配置    有効値は   top,cenetr,bottom
text4.fontSize = 22
text4.width = "55%"        //%で表記する(数値でもできる)。
text4.positionY = -20
text4.opacity = 1
text4.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
text4.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない
text4.visible = false                       


//------------text5 =  Explain_Plane5---------------------------
const text5 = new UIText(canvas)

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
text5.value = "Explaination5 in English"

text5.color = Color4.Black()
text5.hAlign = "center"    //右寄り、中央、左寄りに配置 =有効値は left,center,right
text5.vAlign = "center"    //上、中央、下に配置    有効値は   top,cenetr,bottom
text5.fontSize = 22
text5.width = "55%"        //%で表記する(数値でもできる)。
text5.positionY = -20
text5.opacity = 1
text5.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
text5.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない
text5.visible = false                       //初期設定でtext3を表示させない

//------------text6 =  Explain_Plane6---------------------------
const text6 = new UIText(canvas)

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
text6.value = "Explaination6 in English"

text6.color = Color4.Black()
text6.hAlign = "center"    //右寄り、中央、左寄りに配置 =有効値は left,center,right
text6.vAlign = "center"    //上、中央、下に配置    有効値は   top,cenetr,bottom
text6.fontSize = 22
text6.width = "55%"        //%で表記する(数値でもできる)。
text6.positionY = -20
text6.opacity = 1
text6.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
text6.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない
text6.visible = false                       //初期設定でtext3を表示させない

//------------text7 =  Person_Plane---------------------------
const text7 = new UIText(canvas)

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
text7.value = "Explaination7 Person  in English"

text7.color = Color4.Black()
text7.hAlign = "center"    //右寄り、中央、左寄りに配置 =有効値は left,center,right
text7.vAlign = "center"    //上、中央、下に配置    有効値は   top,cenetr,bottom
text7.fontSize = 22
text7.width = "55%"        //%で表記する(数値でもできる)。
text7.positionY = -20
text7.opacity = 1
text7.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
text7.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない
text7.visible = false                       //初期設定でtext3を表示させない

//------------text8 =  Poster_Plane---------------------------
const text8 = new UIText(canvas)

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★
text8.value = "Explaination8 Poster  in English"

text8.color = Color4.Black()
text8.hAlign = "center"    //右寄り、中央、左寄りに配置 =有効値は left,center,right
text8.vAlign = "center"    //上、中央、下に配置    有効値は   top,cenetr,bottom
text8.fontSize = 22
text8.width = "55%"        //%で表記する(数値でもできる)。
text8.positionY = -20
text8.opacity = 1
text8.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
text8.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない
text8.visible = false                       //初期設定でtext3を表示させない



//------------close_領域------------------------------------------
//------------close_text領域---------------------------

const close_text = new UIText(canvas)
close_text.value = " close"    

close_text.color = Color4.Black()
close_text.fontSize = 21
close_text.width = "9%"        //%で表記する(数値でもできる)。
close_text.height = "6%"
close_text.hAlign = "center"
close_text.positionX = 14
close_text.positionY = -115
close_text.opacity = 1
close_text.adaptWidth = false           //これをfalseにすることで、text.widthを変更して自分の好きな幅で表示することができる
close_text.textWrapping = true         //ラッピングのこと。これがないとwidthをいじってもうまく表示されない


//------------クリックボタン領域、Closeのボタン----------------------
const close_botton = new UIImage(canvas, new Texture("images/scene-thumbnail.png"))
close_botton.name = "clickable-image"
close_botton.width = "9%"         //ボタンの大きさは100*30pxくらいがいい
close_botton.height = "6%"
close_botton.positionX = 0         //ポジション変更、+で➡寄り、ーで←寄り。中央が問題が少なそう。
close_botton.positionY = -120        //-120が限界かもしれない、それより下はクリック不可。ポジション変更、ーで下に移動
close_botton.opacity = 0.2


//ボタンクリックで実行、この形式はUIであり、エンティティにはOnPointerDownを使う
close_botton.onClick = new OnClick(() => {
    canvas.visible = false                       //ボタンクリックで、canvasを観えなくする
    text1.visible = false                  
    text2.visible = false                
    text3.visible = false                        
    text4.visible = false                   
    text5.visible = false                 
    text6.visible = false                      
    text7.visible = false                     
    text8.visible = false                        

    canvas.isPointerBlocker = true
    close_botton.visible = false              //閉じるボタンで、閉じるボタンそのものを表示させない

})


//----------------マティ領域---------------------------------------------------------------------------------------
//-------マティ  1～4---------------
const Explain_Plane1to4_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★
const Explain_Plane1to4_Tex = new Texture("images/Reverse__Explain_poster.png")
Explain_Plane1to4_Mat.texture = Explain_Plane1to4_Tex

Explain_Plane1.addComponent(Explain_Plane1to4_Mat)
Explain_Plane2.addComponent(Explain_Plane1to4_Mat)
Explain_Plane3.addComponent(Explain_Plane1to4_Mat)
Explain_Plane4.addComponent(Explain_Plane1to4_Mat)


//-------マティ  5～8---------------
const Explain_Plane5to8_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★
const Explain_Plane5to8_Tex = new Texture("images/Reverse__Explain_poster2.png")
Explain_Plane5to8_Mat.texture = Explain_Plane5to8_Tex

Explain_Plane5.addComponent(Explain_Plane5to8_Mat)
Explain_Plane6.addComponent(Explain_Plane5to8_Mat)
Person_Plane.addComponent(Explain_Plane5to8_Mat)
Poster_Plane.addComponent(Explain_Plane5to8_Mat)
Poster2_Plane.addComponent(Explain_Plane5to8_Mat)

