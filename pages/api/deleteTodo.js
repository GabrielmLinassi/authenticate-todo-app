import { getMinifiedRecord, table } from "./utils/Airtable";
import auth0 from "./utils/Auth0";

export default auth0.requireAuthentication(async (req, res) => {
  const { id } = req.body;
  const { user } = await auth0.getSession(req);
  try {
    const deletedRecords = await table.destroy([id]);
    res.statusCode = 200;
    res.json(getMinifiedRecord(deletedRecords[0]));
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
});
