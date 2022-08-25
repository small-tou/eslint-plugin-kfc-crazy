module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "KFC Crazy Thursday",
      category: "KFC Crazy Thursday",
      recommended: true,
    },
  },
  create: function (context) {
    return {
      Program(node) {
        const hours = new Date().getHours();
        const dayOfWeek = new Date().getDay();

        if (dayOfWeek === 4) {
          context.report(node, "Error: KFC Crazy Thursday need 50$.");
        }
      },
    };
  },
};
