import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      {/* -------------------------------
          Navbar container
          - Flex layout with background color
      ------------------------------- */}
      <ul className="h-10 flex items-center justify-around w-full bg-cyan-600 ">
        {/* -------------------------------
            Link Component
            - Navigates to a route without page reload
            - Use for simple links
        ------------------------------- */}
        <Link to={""}>
          <li>This is My first React website</li>
        </Link>

        <li>
          <ul className="flex gap-5 text-white">
            {/* -------------------------------
                NavLink Component
                - Same as Link but knows if it’s active
                - Allows conditional styling based on active route
                - Useful for highlighting current page in navbar
            ------------------------------- */}
            <li className="cursor-pointer">
              <NavLink
                to="/counter"
                className={({ isActive }) =>
                  `hover:text-gray-500 ${
                    isActive ? "text-gray-500" : "text-white"
                  }`
                }
              >
                Counter
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink
                to="/bg"
                className={({ isActive }) =>
                  `hover:text-gray-500 ${
                    isActive ? "text-gray-500" : "text-white"
                  }`
                }
              >
                Background
              </NavLink>
            </li>

            <li className="cursor-pointer">
              <NavLink
                to="/cards"
                className={({ isActive }) =>
                  `hover:text-gray-500 ${
                    isActive ? "text-gray-500" : "text-white"
                  }`
                }
              >
                Product
              </NavLink>
            </li>

            <li className="cursor-pointer">
              <NavLink
                to="/password"
                className={({ isActive }) =>
                  `hover:text-gray-500 ${
                    isActive ? "text-gray-500" : "text-white"
                  }`
                }
              >
                Password
              </NavLink>
            </li>

            <li className="cursor-pointer">
              <NavLink
                to="/currency"
                className={({ isActive }) =>
                  `hover:text-gray-500 ${
                    isActive ? "text-gray-500" : "text-white"
                  }`
                }
              >
                Currency
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `hover:text-gray-500 ${
                    isActive ? "text-gray-500" : "text-white"
                  }`
                }
              >
                Git-Hub
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default App;
