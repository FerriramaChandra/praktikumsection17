import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import NameForm from "./FormCoding";

describe('NameForm', () => {
    test('renders FormCoding compoenent', () =>{
        render(<NameForm/>);
        screen.debug()
        expect(screen.getByText('Pendaftaran Peserta Coding Bootcamp')).toBeInTheDocument()
        expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument()
    });
    test('input text for judul and pengarang', () => {
        render(<NameForm/>);
        fireEvent.input(
            screen.getByRole('textbox', {name:/Nama Lengkap/}),
            {target: {value:"Ferri Rama Chandra"}}
        )
        fireEvent.input(
            screen.getByRole('textbox', {name:/Email/}),
            {target: {value:"hehe@boi.com"}}
        )

        expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Ferri Rama Chandra")
        expect(screen.getByLabelText(/Email/)).toHaveValue("hehe@boi.com")
    });
    test('input text for pengarang with number', () => {

    });
    test('submit button', () => {
        
    });

});