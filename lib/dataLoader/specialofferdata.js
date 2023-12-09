import specialofferModel from "~/models/specialoffer";
import settingsModel from "~/models/setting";
import dbConnect from "~/utils/dbConnect";

export default async function SpecialofferData(slug) {
  try {
    await dbConnect();
    const settings = await settingsModel.findOne({});
    const specialoffer =[];// await specialofferModel.findOne({ slug: slug }).populate('specialofferproducts.product').exec();
    return {
      success: true,
      settings,
      specialoffer,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      settings: {},
      specialoffer:[],
    };
  }
} 
