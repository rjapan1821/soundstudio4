/*
    メモ
    Photoのマティは、 1=1     2=2     3= 3     4= SampleName のプレートが入ります。
*/


//----------------Plane領域---------------------------------------------------------------------------------------
//-----------------Photo_Plane1---------------------------
const Photo_Plane1 = new Entity()
Photo_Plane1.addComponent(new Transform({
    position: new Vector3(12.889, 3.633999, 15.066),
    rotation: new Quaternion(0, 0, 1, -4.371139E-08),
    scale: new Vector3(2.535, 1.66, 1.906)
}))
engine.addEntity(Photo_Plane1)


//-----------------Photo_Plane2---------------------------
const Photo_Plane2 = new Entity()
Photo_Plane2.addComponent(new Transform({
    position: new Vector3(15.169, 4.984001, 6.015994),
    rotation: new Quaternion(0.7071068, -3.090862E-08, 0.7071068, -3.090862E-08),
    scale: new Vector3(2.855, 2.819999, 1.906)
}))
engine.addEntity(Photo_Plane2)


//-----------------Photo_Plane3---------------------------
const Photo_Plane3 = new Entity()
Photo_Plane3.addComponent(new Transform({
    position: new Vector3(0.9690001, 6.104004, 7.986001),
    rotation: new Quaternion(0.7071068, -3.090862E-08, -0.7071068, 3.090862E-08),
    scale: new Vector3(7.639997, 5.16, 5.22)
}))
engine.addEntity(Photo_Plane3)


/*
//-----------------SampleName_Plane---------------------------
const SampleName_Plane = new Entity()
SampleName_Plane.addComponent(new Transform({
    position: new Vector3(15.17899, 1.394, 4.545996),
    rotation: new Quaternion(0.7071068, -3.090862E-08, 0.7071068, -3.090862E-08),
    scale: new Vector3(1.16, 1.16, 1.16)
}))
engine.addEntity(SampleName_Plane)

*/




//----------------UV領域---------------------------------------------------------------------------------------

//------ UV__Ex_plane1----------
const Photo_Plane1_UV = new PlaneShape()
Photo_Plane1_UV.uvs = [
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
Photo_Plane1.addComponent(Photo_Plane1_UV)




//------ UV__Ex_plane2----------
const Photo_Plane2_UV = new PlaneShape()
Photo_Plane2_UV.uvs = [
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
Photo_Plane2.addComponent(Photo_Plane2_UV)



//------ UV__Ex_plane3----------
const Photo_Plane3_UV = new PlaneShape()
Photo_Plane3_UV.uvs = [
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
Photo_Plane3.addComponent(Photo_Plane3_UV)


/*      SampleNameはこの建物は無し
//------ UV__Ex_plane4----------
const SampleName_Plane_UV = new PlaneShape()
SampleName_Plane_UV.uvs = [
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
SampleName_Plane.addComponent(SampleName_Plane_UV)
*/



//----------------マティ領域---------------------------------------------------------------------------------------
//-------マティ  1～4---------------
const Photo_Plane1to4_Mat = new BasicMaterial()

//★★★★説明文ソースの 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★
const Photo_Plane1to4_Tex = new Texture("images/SampleName_Photo.png")
Photo_Plane1to4_Mat.texture = Photo_Plane1to4_Tex

Photo_Plane1.addComponent(Photo_Plane1to4_Mat)
Photo_Plane2.addComponent(Photo_Plane1to4_Mat)
Photo_Plane3.addComponent(Photo_Plane1to4_Mat)


//SampleName_Plane.addComponent(Photo_Plane1to4_Mat)


