document.getElementById('regForm').addEventListener('submit', function(event) {
    var namePattern = /^[A-Za-z\s'-]+$/;
    var rollnoPattern = /^\d+$/;
    var mobilePattern = /^\d{10}$/;

    var name = document.getElementById('name').value;
    var rollno = document.getElementById('rollno').value;
    var mobile = document.getElementById('mobileno').value;

    if (!namePattern.test(name)) {
        alert('Please enter a valid name (letters, spaces only).');
        event.preventDefault();
    }

    if (!rollnoPattern.test(rollno)) {
        alert('Please enter a valid roll number (numbers only).');
        event.preventDefault();
    }

    if (!mobilePattern.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        event.preventDefault();
    }
});
