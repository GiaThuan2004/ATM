document.addEventListener('DOMContentLoaded', function () {
    const amountInput = document.getElementById('amount');
    const keypadButtons = document.querySelectorAll('.key');
    const withdrawButton = document.querySelector('.withdraw');
    const topUpButton = document.querySelector('.deposit'); // Đổi tên thành topUpButton
    const enterButton = document.querySelector('.enter');
    const backButton = document.querySelector('.back');

    let currentAction = ''; // Lưu hành động hiện tại (rút hoặc nạp tiền)

    // Hàm định dạng số tiền
    function formatAmount(value) {
        // Loại bỏ các dấu chấm cũ
        value = value.replace(/\./g, '');
        // Thêm dấu chấm phân tách phần nghìn
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    // Xử lý khi nhấn các phím số
    keypadButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.classList.contains('clear')) {
                // Xóa toàn bộ nội dung input khi nhấn 'C'
                amountInput.value = '';
            } else {
                // Thêm số và định dạng lại số tiền
                amountInput.value += button.textContent;
                amountInput.value = formatAmount(amountInput.value);
            }
        });
    });

    // Khi nhấn nút "Withdraw" để chuẩn bị rút tiền
    withdrawButton.addEventListener('click', function () {
        currentAction = 'withdraw';
    });

    // Khi nhấn nút "Top Up" để chuẩn bị nạp tiền
    topUpButton.addEventListener('click', function () {
        currentAction = 'deposit';
    });

    // Xử lý khi nhấn nút "Enter" sau khi chọn "Withdraw" hoặc "Top Up"
    enterButton.addEventListener('click', function () {
        const amount = parseFloat(amountInput.value.replace(/\./g, '')); // Chuyển đổi giá trị nhập thành số (bỏ dấu chấm)
        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        if (currentAction === 'withdraw') {
            // Thực hiện logic rút tiền
            alert(`Withdrawing $${amount}`);
            // Thêm logic rút tiền ở đây (ví dụ: cập nhật số dư, gọi API...)
        } else if (currentAction === 'deposit') {
            // Thực hiện logic nạp tiền
            alert(`Depositing $${amount}`);
            // Thêm logic nạp tiền ở đây (ví dụ: cập nhật số dư, gọi API...)
        } else {
            alert('Please choose an action (Withdraw or Top Up) first.');
        }

        // Reset sau khi hoàn thành giao dịch
        amountInput.value = '';
        currentAction = '';
    });

    // Chức năng quay lại trang trước khi nhấn nút "Back"
    backButton.addEventListener('click', function () {
        window.history.back();
    });
});
