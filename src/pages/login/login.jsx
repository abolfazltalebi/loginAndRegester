import { Link } from "react-router-dom";
import login from "../../assets/images/login.png";

export default function Login() {
  return (
    <main className="h-screen bg-orange-100 flex flex-col items-center justify-center p-12">
      <section className="grid grid-cols-2 gap-4">
        <div>
          <img src={login} alt="" />
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-xl border-4  border-amber-400">
          <h1 className="font-bold text-2xl">ورود به پیشخوان</h1>
          <form action="" className="flex flex-col my-5 gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="username">نام و نام خانوادگی</label>
              <input
                type="text"
                id="username"
                className="bg-white border-2 border-orange-400 rounded-xl p-2 outline-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">رمز عبور</label>
              <input
                type="password"
                id="password"
                className="bg-white border-2 border-orange-400 rounded-xl p-2 outline-0"
              />
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="bg-orange-600 p-2 rounded-xl px-12 text-white duration-500 transition-all hover:rounded-full cursor-pointer">
                ورود به پنل
              </button>
              <Link to={"/register"}>
                <button className="border-2 border-orange-600 p-2 rounded-xl px-12 duration-500 transition-all hover:rounded-full cursor-pointer">
                  ثبت نام
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
