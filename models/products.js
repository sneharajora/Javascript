const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    const dbname = client.db("peopledata");
    const col = dbname.collection("people");

    const peopledocuments = [
      {
        name: { first: "Ada", last: "Lovelace" },
        birth: new Date(1999, 11, 10),
        skilllevel: "excellent",
        level: 43,
      },
      {
        name: { first: "Grace", last: "Hopper" },
        birth: new Date(1998, 5, 9),
        skilllevel: "expert",
        level: 20,
      },
      {
        name: { first: "Linus", last: "Torvalds" },
        birth: new Date(2000, 0, 28),
        skilllevel: "very good",
        level: 100,
      },
    ];
    // Insert
    // const p = await col.insertMany(peopledocuments);

    // find the document
    const document = await col.findOne({ "name.last": "Lovelace" });
    // console.log("document found:" + JSON.stringify(document));

    /// find all documents
    const alldocs = await col.find({}).toArray();
    // console.log(alldocs);

    // ifnd latest
    const latest = await col.find({}).sort({ birth: -1 }).limit(1).toArray();
    //  console.log("newdoc:", latest);

    //   query

    const cursor = await col
      .find({
        level: { $lt: 50 },
      })
      .toArray();

    console.log("cursor:", cursor);

    const count = await col.countDocuments();
    console.log("Total document:", count);

    // to query a particular like where

    const whereas = await col
      .find({
        level: { $in: [43] },
      })
      .toArray();

    console.log("whereas:", whereas);

    // And query
    const query1 = await col
      .find({
        skilllevel: "expert",
        level: 20,
      })
      .toArray();

    console.log(query1);

    //OR query
    const query2 = await col
      .find({
        $or: [{ skilllevel: "very good" }, { "name.last": "Ada" }],
      })
      .toArray();
    console.log("query2:", query2);

    //update

    const query3 = await col.findOneAndUpdate(
      {
        "name.first": "Ada",
      },
      {
        $set: { level: 10 },
        $currentDate: { lastmodified: true },
      },
       {
          returnDocument: "after"
       }
      );

    console.log("Modified data:", query3);
  } catch (error) {
    console.log(error.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
