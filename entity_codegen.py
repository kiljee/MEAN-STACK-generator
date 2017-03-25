"""
An example how to generate java code from textX model using jinja2
template engine (http://jinja.pocoo.org/docs/dev/)
"""
from os import mkdir
from os.path import exists, dirname, join
import jinja2
from entity_test import get_entity_mm

from backend.routes.route import functionRoute
from backend.app import functionApp
from backend.controllers.controller import functionController
from backend.models.model import functionModel
from frontend.entities.entity import functionAllEntity
from frontend.entities.allEntityHtml import functionEntityHtml
from frontend.entities.allEntityController import functionAllEntityController
from frontend.entities.entityService import functionEntityService
from frontend.index import functionIndex
from frontend.navbar.navbar import functionNavbar
def main(debug=False):
    this_folder = dirname(__file__)
    functionRoute(this_folder, debug)
    functionController(this_folder, debug)
    functionModel(this_folder, debug)
    functionApp(this_folder, debug)
    functionAllEntity(this_folder, debug)
    functionEntityHtml(this_folder, debug)
    functionAllEntityController(this_folder, debug)
    functionEntityService(this_folder, debug)
    functionIndex(this_folder, debug)
    functionNavbar(this_folder, debug)
if __name__ == "__main__":
    main()
