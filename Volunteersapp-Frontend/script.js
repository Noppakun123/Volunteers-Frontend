document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const nameCell = newRow.insertCell(0);
        const ageCell = newRow.insertCell(1);
        const actionCell = newRow.insertCell(2);

        nameCell.textContent = name;
        ageCell.textContent = age;

        actionCell.innerHTML = `
        <span class="edit">แก้ไข</span> | 
        <span class="delete">ลบ</span>
      `;

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';

        actionCell.querySelector('.delete').addEventListener('click', function() {
            table.deleteRow(newRow.rowIndex - 1);
        });

        actionCell.querySelector('.edit').addEventListener('click', function() {
            document.getElementById('name').value = nameCell.textContent;
            document.getElementById('age').value = ageCell.textContent;
            table.deleteRow(newRow.rowIndex - 1);
        });
    }
});