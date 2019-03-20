module ApplicationHelper

  def session_link
    if (logged_in?)
      link_to("Logout", logout_path, method: :delete, class: "navbar-item")
    else
      link_to("Login", login_path, class: "navbar-item")
    end
  end

end
