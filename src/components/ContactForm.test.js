import React from "React";
import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";

test('render test', ()=>{
    render(<ContactForm/>)
});

test('form validation, no errors from form inputs', ()=>{
    render(<ContactForm/>);
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/email/i);
    const errorMessage = screen.queryByText(/looks like there was an error/i);

    userEvent.type(firstName, 'longnamehere');
    expect(errorMessage).not.toBeInTheDocument()

    userEvent.type(lastName, 'McNamerson');
    expect(errorMessage).not.toBeInTheDocument()

    userEvent.type(email, 'john@email.com');
    expect(errorMessage).not.toBeInTheDocument()
})