import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {RenderMainWeb} from './Render_Web'

function MyForm() {
    const [pricelist, setPriceList] = useState(null);
    fetch('./data.json', { cache: "no-store" }).then(response =>
        response.json().then(data => ({
            data: data,
        })
        ).then(res => {
            if (res.data !== null) {
                setPriceList(res.data.ceny);
            }
        }));

    return (
       <RenderMainWeb pricelist={pricelist} />
    );
}


const formContainer = document.getElementById('form_placeholder');
const form = ReactDOM.createRoot(formContainer);
form.render(<MyForm />)

//table.render(<DrawTable data={this.state.data} />);




