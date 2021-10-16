import React from 'react';

const Crypto = ({ data }) => {
    const { asset_id, name, price, change_1h, change_24h, change_7d, created_at, updated_at } = data;

    const insertField = (data) => {
        let className = 'red';

        if (data > 0)
            className = 'green';

        return <span className={className}>{data}%</span>;
    }


    return <div className='cryptoData'>
        <table>
            <tbody>
                <tr>
                    <td className='cryptoName' colSpan='3'><b>{name} ({asset_id})</b></td>
                </tr>
                <tr>
                    <td><span className='dataField'>Last 7 Days:</span> {insertField(change_7d.toFixed(2))}</td>
                    <td><span className='dataField'>Last 24 Hr:</span> {insertField(change_24h.toFixed(2))}</td>
                    <td><span className='dataField'>Last Hr:</span> {insertField(change_1h.toFixed(2))}</td>
                </tr>
                <tr className='currentData'>
                    <td><span className='dataField'>Price:</span> ${price.toFixed(2)}</td>
                    <td><span className='dataField'>Created:</span> {new Date(created_at).toLocaleDateString()}</td>
                    <td><span className='dataField'>Updated:</span> {new Date(updated_at).toLocaleDateString()}</td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Crypto;