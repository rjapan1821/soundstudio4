
//―――――――――OBJ_Bill_All―――――――――――――




const Bill_All = new Entity()
Bill_All.addComponent(new GLTFShape("models/4_SoundStudio_gltf.gltf"))   
Bill_All.addComponent(new Transform({
    position: new Vector3(8.019999, -0.06599934, 7.912001),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
}))

engine.addEntity(Bill_All)


