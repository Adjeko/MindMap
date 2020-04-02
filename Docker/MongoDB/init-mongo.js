db.createUser(
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
