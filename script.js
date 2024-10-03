 // Đối tượng chứa thông tin thẻ ngân hàng
        const bankAccount = {
            cardNumber: '1234567812345678',
            cardHolder: 'John Doe',
            expirationMM: '12',
            expirationYY: '2025',
            cvv: '123'
        };

        // Lấy các phần tử HTML
        const form = document.getElementById('cardForm');
        const cvvModal = document.getElementById('cvvModal');
        const cvvNumber = document.getElementById('cvvNumber');
        const cvvClose = document.getElementById('cvvClose');

        // Xử lý sự kiện khi nhấn nút CONFIRM
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Ngăn form reload trang

            // Lấy giá trị người dùng nhập vào
            const cardNumberInput = document.getElementById('cardNumber').value;
            const cardHolderInput = document.getElementById('cardHolder').value;
            const expirationMMInput = document.getElementById('expirationMM').value;
            const expirationYYInput = document.getElementById('expirationYY').value;

            // Kiểm tra thông tin nhập vào với thông tin thẻ ngân hàng
            if (cardNumberInput === bankAccount.cardNumber &&
                cardHolderInput === bankAccount.cardHolder &&
                expirationMMInput === bankAccount.expirationMM &&
                expirationYYInput === bankAccount.expirationYY) {
                
                // Hiển thị CVV trong modal
                cvvNumber.textContent = bankAccount.cvv;
                cvvModal.style.display = 'block';
            } else {
                alert('Thông tin thẻ không chính xác!');
            }
        });

        // Đóng modal khi nhấn nút "X"
        cvvClose.addEventListener('click', function() {
            cvvModal.style.display = 'none';
        });