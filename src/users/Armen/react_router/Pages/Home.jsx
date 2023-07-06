
export default function Home() {
  const login = () => {
    localStorage.setItem("isLogin", true)
  }
  const logout = () => {
    localStorage.removeItem("isLogin")
  }
  return (
    <div>
        <h1>HOME PAGE</h1>

        <button onClick={login}>LogIn</button>
        <button onClick={logout}>LogOut</button>
        
    </div>
  )
}
