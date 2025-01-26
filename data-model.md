# General

We have two main types of entities:
* Event - it has a specific date
* Time Period - it lasts from certain date up to one point

# Event

An event has to have following properties:

* title: string - will be displayed in tooltip on hover;
* label: string - a very short description, will be displayed next to icon. Preferably up to 16 characters, above 20 characters definitely to much;
* icon: string;
* year: number;
* tags: string[];
* shortDescription: string - a short description, will be displayed in tooltip on hover;
* longDescription: string;
* colorSet?: string;

Additional properties:
* date;
* assets
* photo;

# Time Period

* title: string - will be displayed in tooltip on hover;
* label: string - a very short description, will be displayed inside the event frame.
* startDate: number;
* endDate: number;
* tags: string[];
* colorSet?: string;