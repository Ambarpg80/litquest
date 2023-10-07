class ChildrenController < ApplicationController
    def index 
        kids = Child.all
        render json: kids, status: :ok
    end

    def show
        child = Child.find(params[:id])
        render json: child, status: :ok
    end

    def create 
        new_child = Child.create(child_params)
        render json: new_child, status: :created
    end

    def update 
        child = Child.find(params[:id])
        child.update(child_params)
        render json: child, status: :accepted
    end

    def destroy
        child = Child.find_by(id: params[:id])
        child.destroy
        head :no_content
    end


    private

    def child_params
        params.permit(:adult_id, :image_url, :rewards)
    end


end
