import { title } from '@templates/pages';
import { h } from 'preact';

const Table = ({children}) => (

<table class="table table--statements">
            <thead class="table__head">
                <tr class="table__row">
                {/* {(Array.isArray(children)) ? children.map((child) => { */}
                    <th class="table__header">{title}</th>
                        <th class="table__header">{title}</th>
                        <th class="table__header">You are returning</th>
                        <th class="table__header">Difference</th>
                        <th class="table__header">erhrgregregregregreg</th>
                </tr>
            </thead>
                <tbody class="table__bd">
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell">
                            <div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div>
                        </td>
                        <td data-th="Transactions" class="table__cell">15</td>
                        <td data-th="Amount" class="table__cell"><label></label><input class="table__cell-input"></input></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell"></td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                        <td data-th="Transactions" class="table__cell">15</td>
                        <td data-th="Amount" class="table__cell"><label></label><input class="table__cell-input"></input></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell"></td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                        <td data-th="Transactions" class="table__cell">15</td>
                        <td data-th="Amount" class="table__cell"><label></label><input class="table__cell-input"></input></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell"></td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                        <td data-th="Transactions" class="table__cell">15</td>
                        <td data-th="Amount" class="table__cell"><label></label><input class="table__cell-input"></input></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell"></td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                        <td data-th="Transactions" class="table__cell">15</td>
                        <td data-th="Amount" class="table__cell"><label></label><input class="table__cell-input"></input></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell"></td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                        <td data-th="Transactions" class="table__cell">15</td>
                        <td data-th="Amount" class="table__cell"><label></label><input class="table__cell-input"></input></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell"></td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                        <td data-th="Transactions" class="table__cell">15</td>
                        <td data-th="Amount" class="table__cell"><label></label><input class="table__cell-input"></input></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell"></td>
                    </tr>
                    <tr class="table__row">
                        <td data-th="Date" class="table__cell"><div class="table__cell-title-link">
                                <a class="table__link" href="/" tabindex="-1">Auto Express</a>
                            </div>
                            <div class="table__cell-title-info">
                                <ul>
                                    <li>12.03.23 - Magazines</li>
                                </ul>
                            </div></td>
                        <td data-th="Transactions" class="table__cell">15</td>
                        <td data-th="Amount" class="table__cell"><label></label><input class="table__cell-input"></input></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell"></td>
                    </tr>
                </tbody>
               
        </table>
);


export default Table;