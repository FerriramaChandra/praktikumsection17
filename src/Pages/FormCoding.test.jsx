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
            {target: {value:"Bumi Manusia"}}
        )
        // expect(screen.getByText('Pendaftaran Peserta Coding Bootcamp')).toBeInTheDocument()
        expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Bumi Manusia")
    });
    test('input text for pengarang with number', () => {

    });
    test('submit button', () => {
        
    });

});