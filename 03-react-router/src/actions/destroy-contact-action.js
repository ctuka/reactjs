import {deleteContact} from "@/contacts";
import { redirect } from "react-router-dom";

export async function destroyContactAction({params}) {
    console.log (" Param: " + params);
    await deleteContact(params.contactId);
    
        return redirect(`/`);
    
}