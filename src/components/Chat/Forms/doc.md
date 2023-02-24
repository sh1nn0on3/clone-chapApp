Form : 
    + confirm or add new user if not have user in firestore then create a tk

    + Xác thực bằng fb và gg  << ở đây là xác thực bằng fb >>  --> dùng " FacebookAuthProvider "
    + Ấn vào btn handlefb vầ " signInWithPopup " --> check auth << auth trong AuthProvider >> 
        -   then ( res )Đúng --> lấy data và lưu vào firestore 