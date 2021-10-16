import React from 'react';

const Crypto = ({ data }) => {
    const { asset_id, name, price, change_1h, change_24h, change_7d, created_at, updated_at } = data;

    return <div className='cryptoData'>
        <table>
            <tbody>
                <tr>
                    <td className='cryptoName' colSpan='3'><b>{name} ({asset_id})</b></td>
                </tr>
                <tr>
                    <td><b>Last 7 Days:</b> {change_7d.toFixed(2)}%</td>
                    <td><b>Last 24 Hr:</b> {change_24h.toFixed(2)}%</td>
                    <td><b>Last Hr:</b> {change_1h.toFixed(2)}%</td>
                </tr>
                <tr className='currentData'>
                    <td><b>Price:</b> ${price.toFixed(2)}</td>
                    <td><b>Created:</b> {new Date(created_at).toLocaleDateString()}</td>
                    <td><b>Updated:</b> {new Date(updated_at).toLocaleDateString()}</td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Crypto;