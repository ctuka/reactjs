import { getContacts } from "@/contacts";

export async function rootLoader() {
    const contacts = await getContacts();
    console.log(contacts);
    return { contacts };
}
