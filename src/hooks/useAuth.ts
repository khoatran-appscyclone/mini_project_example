import { useNavigate } from "react-router-dom";

//Đây chỉ là ví dụ đơn giản, muốn kiểm tra user đăng nhập hay chưa phải sử dụng token và gửi request lên server
//không nên áp dụng cách này trong thực tế
//ví dụ này anh làm để tụi em biết cách triển khai private route, custom hook và sử dụng localStorage
function useAuth() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  const handleLogout = () => {
    // Simulate login
    localStorage.setItem("isAuthenticated", "false");
    navigate("/login");
  };

  return {
    handleLogin,
    handleLogout,
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  };
}

export default useAuth;
