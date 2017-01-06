db.bios.find({awards: {$exists: true}});
db.bios.find({awards: {$exists: false}});
db.bios.find({contribs: {$in: ["OOP", "UNIX"]}});
db.bios.find({"awards.award": "Turing Award"});
db.bios.find({$and: [{"_id": {$gt: 3}}, {"_id": {$lt: 7}}]});
db.bios.find({"awards.year": {$lt: 2000}});
db.bios.find({$and: [{birth: {$exists: true}}, {death: {$exists: false}}]});
