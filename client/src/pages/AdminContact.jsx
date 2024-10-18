import React, { useEffect, useState } from 'react';
import { useAuth } from "./Store/Auth";

const AdminContact = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { authorization } = useAuth(); // Use authorization for API calls

    const fetchContacts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/admin/contacts', {
                method: 'GET',
                headers: {
                    Authorization: authorization, // Include the authorization token if needed
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch contacts');
            }
            const data = await response.json();
            setContacts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteContact = async (id) => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
            try {
                const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: authorization, // Include the authorization token if needed
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to delete contact');
                }

                // Refresh the contact list after deletion
                fetchContacts(); // Re-fetch contacts to update the state
            } catch (err) {
                setError(err.message);
            }
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    if (loading) return <p>Loading contacts...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="admin-contacts-section">
            <h1>Admin Contact Data</h1>
            <div className="container admin-users">
                {contacts.map((curContactData) => {
                    const { _id, email, message } = curContactData;
                    return (
                        <div className="contact-card" key={_id}>
                            <h2>{email}</h2>
                            <p><strong>Message:</strong> {message}</p>
                            <button className="btn" onClick={() => handleDeleteContact(_id)}>Delete</button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AdminContact;
