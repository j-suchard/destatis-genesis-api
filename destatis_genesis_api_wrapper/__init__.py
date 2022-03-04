"""Wrapper for the JSON API of the DESTATIS GENESIS database"""
import logging

from pydantic import SecretStr

from . import tools
from .enums import GENESISLanguage, GENESISCategory, GENESISJobType, GENESISJobCriteria, \
    GENESISObjectType, GENESISStatisticCriteria, GENESISArea, GENESISTableCriteria
from .responses import *

# Create a logger for the whole module
logger = logging.getLogger('DESTATIS-GENESIS')
"""The logger which is used in this module"""


class AsyncGENESISWrapper:
    """
    An asynchronous Wrapper for the GENESIS API
    """

    def __init__(
            self,
            username: str,
            password: str,
            language: GENESISLanguage = GENESISLanguage.GERMAN
    ):
        """Create a new GENESIS database wrapper

        :param username: The username which was assigned during the creation of an account(
            length: 10 characters)
        :type username: str
        :param password: The password for the username (length: 10-20 characters)
        :type password: SecretStr
        :param language: The language which should be used in the response bodies, defaults to
            German
        :type language: GENESISLanguage
        """
        # Check if the username consists of 10 characters
        if len(username) != 10:
            raise ValueError("The username is not 10 characters long.")
        # Check if the password's length is between 10 and 20 characters
        if not (10 <= len(password) <= 20):
            raise ValueError("The password is not between 10 and 20 characters long")
        # Since all values passed the check save the username and password to the wrapper,
        # but keep them private
        self.__username = username
        self.__password = SecretStr(password)
        self.__language = language
        self.__base_parameter = {
            'username': self.__username,
            'password': self.__password.get_secret_value(),
            'language': self.__language.value
        }
        self.HelloWorld: AsyncGENESISWrapper.__HelloWorld = self.__HelloWorld(username, password, language)
        """Methods in the `Hello World` part of the official API documentation"""
        self.Find: AsyncGENESISWrapper.__Find = self.__Find(username, password, language)
        """Methods in the `Find` part of the official API documentation"""
        self.Catalogue: AsyncGENESISWrapper.__Catalogue = self.__Catalogue(username, password, language)
        """Methods in the `Catalogue` part of the official API documentation"""
    
    class __HelloWorld:
        """All methods from the HelloWorld section of the API documentation"""

        def __init__(
                self,
                username: str,
                password: str,
                language: GENESISLanguage = GENESISLanguage.GERMAN
        ):
            """Create a new HelloWorld method wrapper

            :param username: The username which was assigned during the creation of an account (
            length: 10 characters)
            :type username: str
            :param password: The password for the username (length: 10-20 characters)
            :type password: SecretStr
            :param language: The language which should be used in the response bodies, defaults to
            German
            :type language: GENESISLanguage
            """
            # Check if the username consists of 10 characters
            if len(username) != 10:
                raise ValueError("The username is not 10 characters long.")
            # Check if the password's length is between 10 and 20 characters
            if not (10 <= len(password) <= 20):
                raise ValueError("The password is not between 10 and 20 characters long")
            # Since all values passed the check save the username and password to the wrapper,
            # but keep them private
            self.__username = username
            self.__password = SecretStr(password)
            self.__language = language
            self.__base_parameter = {
                'username': self.__username,
                'password': self.__password.get_secret_value(),
                'language': self.__language.value
            }
        
        @staticmethod
        async def who_am_i() -> HelloWorld.WhoAmIResponse:
            """Get information about the client data transmitted to the GENESIS database
            
            :return: A Response containing the IP Address and the User-Agent for the request that
            has
                been executed
            :rtype: WhoAmIResponse
            """
            return await tools.get_parsed_response('/helloworld/whoami', None,
                                                   HelloWorld.WhoAmIResponse)
    
        async def login_check(self) -> HelloWorld.LoginCheckResponse:
            """Check the login data which were supplied during the creation of the wrapper
            
            :return: The response from the server containing the success or failure of the reqeust
            :rtype: LoginCheckResponse
            """
            return await tools.get_parsed_response(
                '/helloworld/logincheck',
                self.__base_parameter,
                HelloWorld.LoginCheckResponse
            )
    
    class __Find:
        """Methods for searching for objects"""
    
        def __init__(
                self,
                username: str,
                password: str,
                language: GENESISLanguage = GENESISLanguage.GERMAN
        ):
            """Create a new Find section method wrapper

            :param username: The username which was assigned during the creation of an account (
            length: 10 characters)
            :type username: str
            :param password: The password for the username (length: 10-20 characters)
            :type password: SecretStr
            :param language: The language which should be used in the response bodies, defaults to
            German
            :type language: GENESISLanguage
            """
            # Check if the username consists of 10 characters
            if len(username) != 10:
                raise ValueError("The username is not 10 characters long.")
            # Check if the password's length is between 10 and 20 characters
            if not (10 <= len(password) <= 20):
                raise ValueError("The password is not between 10 and 20 characters long")
            # Since all values passed the check save the username and password to the wrapper,
            # but keep them private
            self.__username = username
            self.__password = SecretStr(password)
            self.__language = language
            self.__base_parameter = {
                'username': self.__username,
                'password': self.__password.get_secret_value(),
                'language': self.__language.value
            }
    
        async def find(
                self,
                search_term: str,
                category: GENESISCategory = GENESISCategory.ALL,
                results_per_category: int = 100
        ) -> Find.FindResult:
            """Get a list of objects in the specified category which match the search term
            
            :param search_term: Term for which the search is executed
            :param category: The category in which the search is executed
            :param results_per_category: Number of results per category
            :return: A response containing the results of the search
            """
            _params = self.__base_parameter | {
                'term':       search_term,
                'category':   category.value,
                'pagelength': str(results_per_category)
            }
            return await tools.get_parsed_response('/find/find', _params, Find.FindResult)
    
    class __Catalogue:
        """Methods for listing objects"""
    
        def __init__(
                self,
                username: str,
                password: str,
                language: GENESISLanguage = GENESISLanguage.GERMAN
        ):
            """Create a new Find section method wrapper

            :param username: The username which was assigned during the creation of an account (
            length: 10 characters)
            :type username: str
            :param password: The password for the username (length: 10-20 characters)
            :type password: SecretStr
            :param language: The language which should be used in the response bodies, defaults to
            German
            :type language: GENESISLanguage
            """
            # Check if the username consists of 10 characters
            if len(username) != 10:
                raise ValueError("The username is not 10 characters long.")
            # Check if the password's length is between 10 and 20 characters
            if not (10 <= len(password) <= 20):
                raise ValueError("The password is not between 10 and 20 characters long")
            # Since all values passed the check save the username and password to the wrapper,
            # but keep them private
            self.__username = username
            self.__password = SecretStr(password)
            self.__language = language
            self._service_url = '/catalogue'
            self.__base_parameter = {
                'username': self.__username,
                'password': self.__password.get_secret_value(),
                'language': self.__language.value
            }
            
        async def cubes(
                self,
                selection: str,
                object_area: GENESISArea = GENESISArea.ALL,
                results: int = 100
        ) -> Catalogue.CubeResponse:
            """Get a list of data cubes matching the selector (PREMIUM ACCOUNTS ONLY)
            
            :param selection: The code of the data cube. You may use a star (*) to allow wild
            carding
            :param object_area: The location of the object
            :param results: The maximum items which are received from the database
            :return: A list of information about the found data cubes
            """
            _parameters = self.__base_parameter | {
                'selection': selection,
                'area': object_area.value,
                'pagelength': str(results)
            }
            _url = self._service_url + '/cubes'
            return await tools.get_parsed_response(_url, _parameters, Catalogue.CubeResponse)
        
        async def cubes_to_statistic(
                self,
                statistic_name: constr(min_length=1, max_length=6),
                cube_code: constr(min_length=1, max_length=10),
                object_area: GENESISArea = GENESISArea.ALL,
                results: int = 100
        ) -> Catalogue.CubeResponse:
            """Get a list of data cubes of a statistic matching the selector (PREMIUM ACCOUNTS ONLY)
            
            :param statistic_name: The name of the statistic that shall be used
            :param cube_code: The code of the data cube in this statistic, star based wild-carding
                is allowed
            :param object_area: The area in which the object is stored
            :param results: The number of maximum results that should be pulled
            :return: A list of information about the data cubes
            """
            _parameters = self.__base_parameter | {
                'name': statistic_name,
                'selection':  cube_code,
                'area': object_area.value,
                'pagelength': str(results)
            }
            _url = self._service_url + '/cubes2statistic'
            return await tools.get_parsed_response(_url, _parameters, Catalogue.CubeResponse)
    
        async def cubes_to_variable(
                self,
                variable_name: constr(min_length=1, max_length=6),
                cube_code: constr(min_length=1, max_length=10),
                object_area: GENESISArea = GENESISArea.ALL,
                results: int = 100
        ) -> Catalogue.CubeResponse:
            """Get a list of data cubes related to the specified variable
            
            :param variable_name: The name of the variable, (max. 6 character)
            :param cube_code: The code of a cube which is related to the variable, stars (*) may be
                used for wild carding
            :param object_area: The area in which the object is stored
            :param results: Number of results which are retrieved
            :return: A list of the data cubes which are related to the variable
            """
            _parameters = self.__base_parameter | {
                'name': variable_name,
                'selection': cube_code,
                'area': object_area.value,
                'pagelength': results
            }
            _url = self._service_url + '/cubes2variable'
            return await tools.get_parsed_response(
                _url,
                _parameters,
                Catalogue.CubeResponse
            )
        
        async def jobs(
                self,
                selector: str,
                search_by: GENESISJobCriteria,
                sort_by: GENESISJobCriteria,
                job_type: GENESISJobType = GENESISJobType.ALL,
                results: int = 100
        ) -> Catalogue.JobResponse:
            """Get a list of jobs which were created
            
            :param selector: Filter for the jobs to be displayed. (1-50 characters, stars (*)
                allowed for wildcarding)
            :param search_by: The criteria on which the selector is applied to
            :param sort_by: The criteria by which the result shall be listed
            :param job_type: The type of job which is to be returned
            :param results: The number of results that shall be returned
            :return:
            """
            if not (1 <= len(selector) <= 50):
                raise ValueError('The length of the selector needs to be between 1 and 50 ('
                                 'inclusive)')
            if None in [search_by, sort_by]:
                raise ValueError('All parameter without a default value need to be set')
            _params = self.__base_parameter | {
                'selection': selector,
                'searchcriterion': search_by.value,
                'sortcriterion': sort_by.value,
                'type': job_type.value,
            }
            _url = self._service_url + '/jobs'
            return await tools.get_parsed_response(_url, _params, Catalogue.JobResponse)
        
        async def modified_data(
                self,
                selector: Optional[str] = None,
                object_type: GENESISObjectType = GENESISObjectType.ALL,
                updated_after: Optional[date] = None,
                results: int = 100
        ) -> Catalogue.ModifiedDataResponse:
            """Get a list of modified objects
            
            DUE TO AN ERROR IN THE DATABASE THE `results` PARAMETER IS BEING IGNORED
            
            :param selector: Filter for the objects to be displayed. (1-15 characters, stars (*)
                allowed for wildcarding)
            :type selector: str
            :param object_type: The type of object that shall be returned
            :type object_type: GENESISObjectType
            :param updated_after: The date after which the objects needed to be changed to be
                returned, defaults to one week (7 days)
            :type updated_after: date
            :param results: The number of results that should be returned
            """
            # Check the parameters for consistency
            if (selector is not None) and (not (1 <= len(selector) <= 15)):
                raise ValueError("The selector's length needs to be between 1 and 15 (inclusive)")
            if (updated_after is not None) and not (updated_after < date.today()):
                raise ValueError("The specified date may not be today or in the future")
            if not (0 < results <= 2500):
                raise ValueError('The number of results need to be between 1 and 2500')
            # Build the query parameters
            _param = self.__base_parameter | {
                'selection': '' if selector is None else selector,
                'type': GENESISObjectType.ALL.value if object_type is None else object_type.value,
                'date': updated_after.strftime('%d.%m.%Y') if updated_after is not None else None,
                'pagelength': results
            }
            _url = self._service_url + '/modifieddata'
            return await tools.get_parsed_response(_url, _param, Catalogue.ModifiedDataResponse)
        
        async def quality_signs(self) -> Catalogue.QualitySignsResponse:
            """Get a list of the quality signs used in the GENESIS database"""
            _url = self._service_url + '/qualitysigns'
            return await tools.get_parsed_response(
                _url, self.__base_parameter, Catalogue.QualitySignsResponse
            )
        
        async def results(
                self,
                selector: str = None,
                result_count: int = 100,
                search_area: GENESISArea = GENESISArea.ALL
        ) -> Catalogue.ResultTableResponse:
            """Get a list of result tables
            
            :param search_area: The area in which the objects are saved
            :param selector: Filter for the result tables code, (1-15 characters, stars(*) allowed)
            :type selector: str
            :param result_count: The number of results which should be returned
            :return: A List of information about the result tables
            """
            if (selector is not None) and (not (1 <= len(selector) <= 15)):
                raise ValueError("The selector's length needs to be between 1 and 15")
            _param = self.__base_parameter | {
                'selection': '' if selector is None else selector,
                'area': search_area.value,
                'pagelength': result_count
            }
            _url = self._service_url + '/results'
            return await tools.get_parsed_response(
                _url, _param, Catalogue.ResultTableResponse
            )
        
        async def statistics(
                self,
                selector: str = None,
                search_by: GENESISStatisticCriteria = GENESISStatisticCriteria.CODE,
                sort_by: GENESISStatisticCriteria = GENESISStatisticCriteria.CODE,
                result_count: int = 100
        ) -> Catalogue.StatisticsResponse:
            """Get a list of statistics matching the supplied parameters
            
            :param selector: The filter which is applied to the field selected by ``search_by``
            :type selector: str
            :param search_by: The field on which the selector shall be applied to, defaults to
                ``GENESISStatisticCriteria.Code``
            :type search_by: GENESISStatisticCriteria
            :param sort_by: Sort the results by the field, defaults to
                ``GENESISStatisticCriteria.Code``
            :type sort_by: GENESISStatisticCriteria
            :param result_count: The number of results that shall be returned
            :type result_count: int
            :return: The response from the database
            :rtype: Catalogue.StatisticsResponse
            """
            # Check if the selector matches the required constraints
            if (selector is not None) and not (1 <= len(selector) <= 15):
                raise ValueError("The selector's length needs to be between 1 and 15")
            _param = self.__base_parameter | {
                'selection': '' if selector is None else selector,
                'searchcriterion': search_by.value,
                'sortcriterion': sort_by.value,
                'pagelength': result_count
            }
            _url = self._service_url + '/statistics'
            return await tools.get_parsed_response(_url, _param, Catalogue.StatisticsResponse)
            
        async def statistics_to_variable(
                self,
                variable_name: str,
                statistic_selector: str = None,
                search_by: GENESISStatisticCriteria = GENESISStatisticCriteria.CODE,
                sort_by: GENESISStatisticCriteria = GENESISStatisticCriteria.CODE,
                object_area: GENESISArea = GENESISArea.ALL,
                result_count: int = 100
        ):
            """Get a list of statistics which are referenced by the selected variable
            
            :param variable_name: The name of the variable [required]
            :type variable_name: str
            :param statistic_selector: Filter for the statistics by the code of them, [optional,
                stars allowed to wildcard, max. length 15]
            :type statistic_selector: str
            :param search_by: The field on which the code shall be applied, [optional, defaults
                to `GENESISStatisticCriteria.CODE`]
            :type search_by: GENESISStatisticCriteria
            :param sort_by: The field by which the results are to be sorted, [optional, defaults
                to `GENESISStatisticCriteria.CODE`]
            :type sort_by: GENESISStatisticCriteria
            :param object_area: The area in which the object is stored
            :type object_area: GENESISArea
            :param result_count: The number of results which are returned by the request
            :type result_count: int
            :return: The response returned by the server
            """
            if variable_name is None:
                raise ValueError('The variable name needs to be set to run a successful query')
            if not 1 <= len(variable_name) <= 15:
                raise ValueError('The variable names length needs to be between 1 and 15 signs')
            if (statistic_selector is not None) and not (1 <= len(statistic_selector) <= 15):
                raise ValueError("The selectors length may not exceed 15 characters")
            # Create the parameters object
            _param = self.__base_parameter | {
                'name': variable_name,
                'selection': '' if statistic_selector is None else statistic_selector,
                'searchcriterion': search_by.value,
                'sortcriterion': sort_by.value,
                'pagelength': result_count,
                'area': object_area.value
            }
            _url = self._service_url + '/statistics2variable'
            return await tools.get_parsed_response(
                _url, _param, Catalogue.StatisticsResponse
            )
        
        async def tables(
                self,
                table_selector: str,
                object_area: GENESISArea = GENESISArea.ALL,
                sort_by: GENESISTableCriteria = GENESISTableCriteria.CODE,
                result_count: int = 100
        ) -> Catalogue.TableResponse:
            """Get a list of tables matching the selector from the selected object area
            
            :param table_selector: The code of the table [required, stars (*) allowed for wildcards]
            :param object_area: The area in which the table is stored [defaults to ALL]
            :param sort_by: The criteria by which the results shall be sorted [defaults to CODE]
            :param result_count: The number of results that shall be returned
            :return: A list of tables matching the request
            """
            if (table_selector is not None) and not (1 <= len(table_selector) <= 15):
                raise ValueError('The table selector needs to be at least 1 character and max 15 '
                                 'characters')
            _param = self.__base_parameter | {
                'selection': table_selector,
                'area': object_area.value,
                'searchcriterion': 'Code',
                'sortcriterion': sort_by.value,
                'pagelength': result_count
            }
            _url = self._service_url + '/tables'
            return await tools.get_parsed_response(
                _url, _param, Catalogue.TableResponse
            )
