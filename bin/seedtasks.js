const mongoose = require('mongoose');
const Task = require('../models/Tasks');


const tasks = [
    {
        "_id": {
            "$oid": "5dfb3927f58a2e4ec40cb1e2"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "done",
        "type": "backend",
        "title": "routes/user-routes",
        "description": "get user/:id",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576745255393"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576745255393"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb398ef58a2e4ec40cb1e3"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "done",
        "type": "backend",
        "title": "routes/user-routes",
        "description": "post /user, create user",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576745358752"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576745358752"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb39bdf58a2e4ec40cb1e4"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "done",
        "type": "backend",
        "title": "routes/user-routes",
        "description": "DELETE /user/:id",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576745405730"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576745405730"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb39e3f58a2e4ec40cb1e5"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "done",
        "type": "backend",
        "title": "routes/user-routes",
        "description": "PUT /user/:id update user profile",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576745443083"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576745443083"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb3a75f58a2e4ec40cb1e6"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "done",
        "type": "backend",
        "title": "routes/project-routes",
        "description": "GET /projects\nget all projects",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576745589962"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576745589962"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb3a99f58a2e4ec40cb1e7"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "done",
        "type": "backend",
        "title": "routes/project-routes",
        "description": "GET /project/:id",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576745625963"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576745625963"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb3c9af58a2e4ec40cb1e8"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "done",
        "type": "backend",
        "title": "routes/project-routes",
        "description": "PUT /projects/:id\n\nupdate the project",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576746138899"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576746177898"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb3cdaf58a2e4ec40cb1e9"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "done",
        "type": "backend",
        "title": "routes/project-routes",
        "description": "DELETE /projects/:id",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576746202967"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576746202967"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb3cf8f58a2e4ec40cb1ea"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "done",
        "type": "backend",
        "title": "routes/project-routes",
        "description": "POST /projects",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576746232903"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576746232903"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb3d19f58a2e4ec40cb1eb"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "done",
        "type": "backend",
        "title": "routes/tasks-routes",
        "description": "GET /tasks/:id",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576746265224"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576746265224"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb3d43f58a2e4ec40cb1ec"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "done",
        "type": "backend",
        "title": "routes/tasks-routes",
        "description": "PUT /tasks/:id",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576746307221"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576746307221"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb3d61f58a2e4ec40cb1ed"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "done",
        "type": "backend",
        "title": "routes/tasks-routes",
        "description": "DELETE /tasks/:id",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576746337939"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576746337939"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb3d94f58a2e4ec40cb1ee"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "done",
        "type": "backend",
        "title": "routes/tasks-routes",
        "description": "POST /tasks",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576746388663"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576746388663"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb3e15f58a2e4ec40cb1ef"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "doing",
        "type": "preperation",
        "title": "present the project",
        "description": "present final project at Ironhack",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576746517160"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576746517160"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb40f2f58a2e4ec40cb1f6"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "to do",
        "type": "preperation",
        "title": "Preparing seed",
        "description": "tasks sedd for deploay",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576747250547"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576747250547"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb41f8f58a2e4ec40cb1f7"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "to do",
        "type": "preperation",
        "title": "Finish presentation",
        "description": "Slide 3-5",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576747512826"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576747512826"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb4227f58a2e4ec40cb1f8"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "to do",
        "type": "preperation",
        "title": "Unique testing ",
        "description": "Backend routes POST task",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576747559947"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576747559947"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb4415f58a2e4ec40cb1f9"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "to do",
        "type": "preperation",
        "title": "Clearing clg",
        "description": "prepare ",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576748053227"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576748053227"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb4483f58a2e4ec40cb1fa"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "to do",
        "type": "preperation",
        "title": "Final test of all featues",
        "description": "frontend and backend",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576748163653"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576748163653"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    },
    {
        "_id": {
            "$oid": "5dfb4517f58a2e4ec40cb1fb"
        },
        "deadline": {
            "$date": {
                "$numberLong": "1576713600000"
            }
        },
        "done": false,
        "status": "testing",
        "type": "frontend",
        "title": "Final test all features",
        "description": "backend and frontend",
        "project": {
            "$oid": "5dfb38cff58a2e4ec40cb1e1"
        },
        "subTask": [],
        "created_at": {
            "$date": {
                "$numberLong": "1576748311721"
            }
        },
        "updated_at": {
            "$date": {
                "$numberLong": "1576748311721"
            }
        },
        "__v": {
            "$numberInt": "0"
        }
    }
    
    
    
]


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
.then(() => {
    console.log('connected to db');
    return Task.create(tasks);
}).then((data) => {
    console.log('created data', data);
}).then(() => {
    mongoose.connection.close();
})
.catch((error) => {
    console.log(error);
    mongoose.connection.close();
});
