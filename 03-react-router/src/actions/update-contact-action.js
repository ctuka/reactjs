import { redirect } from "react-router-dom";
import { updateContact } from "@/contacts";

export async function updateContactAction({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    // directs to the new page as edited
    return redirect(`/contacts/${params.contactId}`);
}
