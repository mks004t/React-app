import React, { useState } from 'react';
import { Calendar, Save, Edit2 } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import { format, subDays, isWithinInterval } from 'date-fns';

interface ProjectFormData {
  projectName: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'planning' | 'active' | 'completed' | 'on-hold';
  priority: 'low' | 'medium' | 'high';
  budget: number;
}

const ProjectEntry = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ProjectFormData>();

  const canEdit = (date: Date) => {
    const sevenDaysAgo = subDays(new Date(), 7);
    return isWithinInterval(date, { start: sevenDaysAgo, end: new Date() });
  };

  const onSubmit: SubmitHandler<ProjectFormData> = (data) => {
    // Here you would typically save to your database
    console.log(data);
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Project Details Entry</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar Section */}
        <Card className="lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Select Date</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <Calendar className="h-4 w-4 mr-2" />
              {format(selectedDate, 'MMM dd, yyyy')}
            </Button>
          </div>
          
          {showCalendar && (
            <div className="p-4 bg-white rounded-lg shadow">
              {/* Calendar component would go here */}
              <p className="text-sm text-gray-500">Calendar implementation required</p>
            </div>
          )}
        </Card>

        {/* Entry Form */}
        <Card className="lg:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="Project Name"
              error={errors.projectName?.message}
              {...register('projectName', { required: 'Project name is required' })}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="date"
                label="Start Date"
                error={errors.startDate?.message}
                {...register('startDate', { required: 'Start date is required' })}
              />
              
              <Input
                type="date"
                label="End Date"
                error={errors.endDate?.message}
                {...register('endDate', { required: 'End date is required' })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-custom focus:border-transparent"
                  {...register('status', { required: 'Status is required' })}
                >
                  <option value="planning">Planning</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="on-hold">On Hold</option>
                </select>
                {errors.status && (
                  <p className="text-sm text-red-500 mt-1">{errors.status.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-custom focus:border-transparent"
                  {...register('priority', { required: 'Priority is required' })}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                {errors.priority && (
                  <p className="text-sm text-red-500 mt-1">{errors.priority.message}</p>
                )}
              </div>
            </div>

            <Input
              type="number"
              label="Budget"
              error={errors.budget?.message}
              {...register('budget', { 
                required: 'Budget is required',
                min: { value: 0, message: 'Budget must be positive' }
              })}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-custom focus:border-transparent"
                rows={4}
                {...register('description', { required: 'Description is required' })}
              />
              {errors.description && (
                <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>
              )}
            </div>

            <div className="flex justify-end space-x-4">
              {editMode && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setEditMode(false);
                    reset();
                  }}
                >
                  Cancel
                </Button>
              )}
              <Button type="submit">
                {editMode ? (
                  <>
                    <Edit2 className="h-4 w-4 mr-2" />
                    Update Project
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Project
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ProjectEntry;
