class PlanningController < ApplicationController
  skip_before_action :require_user



  def set_student
    @student = Student.find (params[:id])
  end

  def show
    if !current_user
      redirect_to login_path
    else

      render template: "pages/planning"
    end



  end


end