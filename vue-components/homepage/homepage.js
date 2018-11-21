let template = `
    <table>
        <thead>
            <tr>
                <td>Amount</td>
                <td>Items</td>
                <td>Weight</td>
                <td>Less</td>
                <td>New wt</td>
                <td>tunch</td>
                <td>lab</td>
                <td>Fine</td>
            </tr>
        </thead>
        <tbody id="tbody">
            <tr>
                <td><input type="text" id="amount"></td>
                <td><select id="item">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select></td>
                <td><input type="text" id="weight"></td>
                <td><input type="text" id="less"></td>
                <td><input type="text" id="newWeight"></td>
                <td><input type="text" id="tunch"></td>
                <td><input type="text" id="lab"></td>
                <td><input type="text" id="fine"></td>
                <button type="button" v-on:click="addItem">Submit</button>
            </tr>
        </tbody>
    </table>
`;

Vue.component('button-counter', {
    methods: {
        addItem () {
            let fields = {
                amountField: this.getElement('#amount'),
                itemField: this.getElement('#item'),
                weightField: this.getElement('#weight'),
                lessField: this.getElement('#less'),
                newWeightField: this.getElement('#newWeight'),
                tunchField: this.getElement('#tunch'),
                labField: this.getElement('#lab'),
                fineField: this.getElement('#fine')
            }

            let isValidateSuccessful = this.validateFields(fields);

            if(isValidateSuccessful)
                this.createRow(fields);
        },
        createRow (fields) {
            let tbody = this.getElement('#tbody');
            let tr = document.createElement('tr');
            
            for(var key in fields) {
                let td = document.createElement('td');
                let field = fields[key];
                td.innerHTML = field.value;
                tr.appendChild(td);
            }

            tbody.appendChild(tr);

        },
        validateFields (fields) {
            for(var key in fields) {
                let isValidate = true;
                let currentElement = fields[key];
                if(typeof currentElement !== "undefined" && typeof currentElement.value !== "undefined" && !currentElement.value) {
                    isValidate = false;
                    this.showError(currentElement);
                }

                return isValidate;
            }
        },
        getElement (selector) {
            return document.querySelector(selector);
        },
        showError (showErrorElement) {
            let span = document.createElement('span');
            span.innerHTML = 'This field is required';
            showErrorElement.parentNode.insertBefore(span, showErrorElement.nextSibling);
        }
    },
    template: template,
})