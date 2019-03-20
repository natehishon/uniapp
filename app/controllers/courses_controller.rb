class CoursesController < ApplicationController
  skip_before_action :require_user

  def set_student
    @student = Student.find (params[:id])
  end

  def index
    if !current_user
      redirect_to login_path
    end
    @courses = Course.all

  end

  def new

  end

end