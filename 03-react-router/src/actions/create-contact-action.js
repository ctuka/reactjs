import {createContact} from "@/contacts";
import { redirect } from "react-router-dom";


export async function createContactAction () {
    const contact = await createContact();
    console.log("createcontact id " + contact.id);
    return redirect(`/contacts/${contact.id}/edit`);
} 