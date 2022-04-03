const data = {
  settings: {
    trackingSince: '2/4/2022',
    activities: {
      toTakeOn: ['code', 'cali', 'cardio'],
      toAvoid: ['pmo', 'zaza'],
    },
  },
  activityLogs: {
    '3/4/2022': ['cardio'],
    '2/4/2022': ['pmo', 'code', 'cali', 'zaza'],
  },
};

function getActivityLogs() {
  let result = [];
  let currentDate = new Date();
  const dateToStr = (date) => {
    return date.toLocaleDateString('es-ES');
  };
  const getCurrentDateStr = () => dateToStr(currentDate);
  const decrementDate = (date) => {
    const decremented = new Date();
    decremented.setDate(date.getDate() - 1);
    return decremented;
  };
  while (
    getCurrentDateStr() !== data.settings.trackingSince
  ) {
    result = result.concat([
      {
        day: getCurrentDateStr(),
        activities:
          data.activityLogs[getCurrentDateStr()] || [],
      },
    ]);

    currentDate = decrementDate(currentDate);
  }
  result = result.concat([
    {
      day: getCurrentDateStr(),
      activities:
        data.activityLogs[getCurrentDateStr()] || [],
    },
  ]);

  return result;
}

export { data, getActivityLogs };
