import { title } from '@templates/pages/returns';
import { h } from 'preact';
import HomePage from '@templates/pages/returns';
import Input from '../forms/textfieldinput';

const Table = ({ headings }) => <table class="table">
            <thead class="table__head">
                <tr class="table__head__row">
                {headings.map(heading => <th class="table__header">{heading}</th>)}
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
                        <td data-th="Amount" class="table__cell"><label />
                        <Input
                        type="text"
                        className="table__cell-input"
                        id="amount" />
                        </td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell" />
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
                        <td data-th="Amount" class="table__cell"><label />
                        <Input
                        type="text"
                        className="table__cell-input"
                        id="amount" /></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell" />
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
                        <td data-th="Amount" class="table__cell"><label />
                        <Input
                        type="text"
                        className="table__cell-input"
                        id="amount" /></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell" />
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
                        <td data-th="Amount" class="table__cell"><label />
                        <Input
                        type="text"
                        className="table__cell-input"
                        id="amount" /></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell" />
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
                        <td data-th="Amount" class="table__cell"><label />
                        <Input
                        type="text"
                        className="table__cell-input"
                        id="amount" /></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell" />
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
                        <td data-th="Amount" class="table__cell"><label />
                        <Input
                        type="text"
                        className="table__cell-input"
                        id="amount" /></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell" />
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
                        <td data-th="Amount" class="table__cell"><label />
                        <Input
                        type="text"
                        className="table__cell-input"
                        id="amount" /></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell" />
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
                        <td data-th="Amount" class="table__cell"><label />
                        <Input
                        type="text"
                        className="table__cell-input"
                        id="amount" /></td>
                        <td data-th="Balance" class="table__cell">3</td>
                        <td data-th="Balance" class="table__cell" />
                    </tr>
                </tbody>
               
</table>;

export default Table;