import { h } from 'preact';
import Tbody from './tbody';
import Thead from './thead';
import Tr from './tr';
import Th from './th';
import Td from './td';
import Tcaption from './Tcaption';

const Table3 = ({ caption, head, body }) => <div class = "table-container">
    <table class="table">
        {caption && <Tcaption>{caption}</Tcaption>}
        {head && <Thead>
            <Tr>{
                head.map(cell => <Th>
                        {cell.value}
                    </Th>)
                }
            </Tr>
        </Thead>}
        <Tbody>
            { body.map((row) => <Tr>
                {row.columns.map((cell) => cell.isHeader 
                        ? <Th scope={'row'}>{cell.value}</Th>
                        : <Td>
                            {cell.value}
                        </Td>
                )}
            </Tr>) }
        </Tbody>
    </table>
</div>

export default Table3;