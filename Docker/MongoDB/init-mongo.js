db.CreateUser(
    {
        user: "MindMap",
        pwd: "mindmap",
        roles: [
            {
                role: "readWrite",
                db: "MindMap"
            }
        ]
    }
) 
