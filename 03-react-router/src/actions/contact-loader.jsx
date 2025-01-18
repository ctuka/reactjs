import {getContact} from "@/contacts";

export async function contactLoader ({params}) {
    const contact = await getContact(params.contactId);
    return { contact };
}