function makeTask(data) {
    const completed = false;
    const category = 'Общее';
    const priority = 'Обычный';
    // Пиши код ниже этой строки
  const task={category,priority, ...data,completed}
  return task;
    // Пиши код выше этой строки
  }
  