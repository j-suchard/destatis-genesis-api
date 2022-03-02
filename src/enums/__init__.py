"""A package containing the enums used in the main code"""
from enum import Enum


class GENESISLanguage(str, Enum):
    """The languages supported by the GENESIS API"""

    GERMAN = 'de'
    ENGLISH = 'en'


class GENESISCategory(str, Enum):
    """Categories which are available during the search"""

    TABLES = 'tables'
    STATISTICS = 'statistics'
    DATA_CUBES = 'cubes'
    VARIABLES = 'variables'
    TIME_SERIES = 'time_series'
    ALL = 'all'
    

class GENESISJobType(str, Enum):
    """
    The different types of jobs that are available on the GENESIS database
    """
    ALL = 'all'
