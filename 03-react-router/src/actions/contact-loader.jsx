import {getContact} from "@/contacts";

export async function contactLoader ({params}) {
    console.log("Yapraaammmm" + params);
    console.log("PArammmm" + params.contactId);
    const contact = await getContact(params.contactId);
    return { contact };
}