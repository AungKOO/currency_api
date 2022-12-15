import getMonthlyRate from "../servcies/month";

export default async (req: any, res: any) => {
  console.log(req.params.id);
  // try {
  let data = await getMonthlyRate();
  console.log("data: ", data);
  return res.status(200).json(data);
  // } catch (err) {
  //   console.log(err);
  //   return res.status(500);
  // }
};
